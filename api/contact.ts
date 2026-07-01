import type { IncomingMessage, ServerResponse } from 'http'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ApiRequest = IncomingMessage & {
  method?: string
  body?: unknown
}

type ApiResponse = ServerResponse & {
  status: (code: number) => ApiResponse
  json: (body: unknown) => ApiResponse
}

function formatFields(data: Record<string, unknown>) {
  return Object.entries(data)
    .map(([key, value]) => `${key}: ${String(value ?? '')}`)
    .join('\n')
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured.' })
  }

  try {
    const parsedBody =
      typeof req.body === 'string'
        ? JSON.parse(req.body)
        : (req.body ?? {})
    const body =
      parsedBody !== null &&
      typeof parsedBody === 'object' &&
      !Array.isArray(parsedBody)
        ? (parsedBody as Record<string, unknown>)
        : {}

    const textBody = `New nxtleap form submission\n\n${formatFields(body)}`
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New nxtleap form submission</h2>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(
          formatFields(body)
        )}</pre>
      </div>
    `

    await resend.emails.send({
      from: 'nxtleap <onboarding@resend.dev>',
      to: 'hasan.khan@dev-pod.io',
      subject: 'nxtleap Form Submission',
      text: textBody,
      html: htmlBody,
      replyTo: typeof body.email === 'string' ? body.email : undefined,
    })

    return res.status(200).json({ success: true, message: 'Email sent.' })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to send email.'
    return res.status(500).json({ error: message })
  }
}
