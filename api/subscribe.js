module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const SERVER = process.env.MAILCHIMP_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!API_KEY || !SERVER || !AUDIENCE_ID) {
    console.error('Missing env vars:', { API_KEY: !!API_KEY, SERVER: !!SERVER, AUDIENCE_ID: !!AUDIENCE_ID });
    return res.status(500).json({ success: false, error: 'Server configuration error.' });
  }

  const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
  const auth = Buffer.from(`anystring:${API_KEY}`).toString('base64');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true });
    }

    if (data.title === 'Member Exists') {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }

    console.error('Mailchimp error:', JSON.stringify(data));
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  } catch (error) {
    console.error('Fetch error:', error.message);
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
};
