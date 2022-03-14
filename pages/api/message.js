import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export default async function message(req, res) {
  if (req.method !== 'POST') {
    return res.json({ message: 'Hi' })
  }

  const {
    USER_EMAIL,
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    EMAIL_REFRESH_TOKEN,
    GMAIL_REDIRECT_URI
  } = process.env

  const OAuth2Client = new google.auth.OAuth2(
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REDIRECT_URI
  )

  OAuth2Client.setCredentials({
    refresh_token: EMAIL_REFRESH_TOKEN
  })

  try {
    const accessToken = await OAuth2Client.getAccessToken()

    if (!accessToken)
      throw new Error('Problem in server, Mail At: aniloli42@gmail.com')

    const { name, email, message } = req.body

    const mailer = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: USER_EMAIL,
        clientId: GMAIL_CLIENT_ID,
        clientSecret: GMAIL_CLIENT_SECRET,
        refreshToken: EMAIL_REFRESH_TOKEN,
        accessToken
      }
    })

    const mailOptions = {
      from: process.env.username,
      to: 'aniloli42@gmail.com',
      subject: `Mail By ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    }

    await mailer.sendMail(mailOptions)

    res.status(200).json({ message: 'Successfully Sent' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
