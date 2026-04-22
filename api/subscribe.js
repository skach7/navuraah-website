const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    const errorBody = error.response && error.response.body;
    if (errorBody && errorBody.title === 'Member Exists') {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }

    console.error('Mailchimp error:', JSON.stringify(errorBody || error.message || error));
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
};
