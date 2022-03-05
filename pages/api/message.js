import nodemailer from "nodemailer";

export default async function message(req, res) {
  if (req.method !== "POST") {
    return res.json({ message: "Hi" });
  }

  const { name, email, message } = req.body;
  try {
    const mailer = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.USER_EMAIL,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN
      }
    });

    const mailOptions = {
      from: process.env.username,
      to: "aniloli42@gmail.com",
      subject: `Mail By ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    };

    await mailer.sendMail(mailOptions);

    res.status(200).json({ message: "Successfully Sent" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
