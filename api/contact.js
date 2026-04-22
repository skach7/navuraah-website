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

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Rooh Contact Form <noreply@navuraah.com>',
        to: 'hello@navuraah.com',
        reply_to: email,
        subject: `New question from ${email}`,
        text: `From: ${email}\n\n${message}`,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true });
    }

    console.error('Resend error:', JSON.stringify(data));
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  } catch (error) {
    console.error('Fetch error:', error.message);
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
};
