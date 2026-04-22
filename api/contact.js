const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ success: false, error: 'Email and message are required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ success: false, error: 'Server configuration error.' });
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: 'Rooh Contact Form <noreply@navuraah.com>',
      to: 'hello@navuraah.com',
      replyTo: email,
      subject: `New question from ${email}`,
      text: `From: ${email}\n\n${message}`,
    });

    console.log('Resend result:', JSON.stringify(result));
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', JSON.stringify(error.message || error));
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
};
