function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeArray(arr) {
  return escapeHtml((arr || []).join(', '));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const body = req.body;

  if (!body || !body.email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ success: false, error: 'Server configuration error.' });
  }

  // Build star display
  function stars(n) {
    return '\u2605'.repeat(n || 0) + '\u2606'.repeat(5 - (n || 0));
  }

  // Build formatted HTML email
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#1a1040;color:#fdf4e7;padding:40px 32px;border-radius:12px;">
      <h1 style="font-size:24px;color:#f59e0b;margin-bottom:4px;">Rooh Beta Feedback</h1>
      <p style="color:#a89bc2;font-size:14px;margin-bottom:32px;">From ${escapeHtml(body.email)}</p>

      <h2 style="font-size:16px;color:#f59e0b;border-bottom:1px solid #2d1b69;padding-bottom:8px;margin-bottom:16px;">About</h2>
      <table style="width:100%;color:#fdf4e7;font-size:14px;margin-bottom:32px;">
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;width:180px;">Child's age</td><td>${escapeHtml(body.childAge) || 'Not provided'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Location</td><td>${escapeHtml(body.location) || 'Not provided'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Frequency</td><td>${escapeHtml(body.frequency) || 'Not provided'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Heard via</td><td>${escapeArray(body.source) || 'Not provided'}</td></tr>
      </table>

      <h2 style="font-size:16px;color:#f59e0b;border-bottom:1px solid #2d1b69;padding-bottom:8px;margin-bottom:16px;">The Stories</h2>
      <table style="width:100%;color:#fdf4e7;font-size:14px;margin-bottom:32px;">
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;width:180px;">Story quality</td><td>${stars(body.storyQuality)}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">What works</td><td>${escapeArray(body.bestElements) || 'None selected'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Needs work</td><td>${escapeArray(body.worstElements) || 'None selected'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Voice cloning</td><td>${body.hasVoice === 'yes' ? 'Yes, set up — Accuracy: ' + stars(body.voiceAccuracy) : body.hasVoice === 'not-yet' ? 'Not yet' : 'Not provided'}</td></tr>
        ${body.hasVoice === 'not-yet' && body.voiceBlocker ? `<tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">What's holding back</td><td>${escapeHtml(body.voiceBlocker)}</td></tr>` : ''}
      </table>

      <h2 style="font-size:16px;color:#f59e0b;border-bottom:1px solid #2d1b69;padding-bottom:8px;margin-bottom:16px;">Shaping Rooh</h2>
      <table style="width:100%;color:#fdf4e7;font-size:14px;margin-bottom:32px;">
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;width:180px;">Values</td><td>${escapeArray(body.importantValues) || 'None selected'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Moral naturalness</td><td>${escapeHtml(String(body.moralNaturalness || 0))}/10</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Tech issues</td><td>${escapeArray(body.techIssues) || 'None'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Usage mode</td><td>${escapeHtml(body.usageMode) || 'Not provided'}</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Wanted features</td><td>${escapeArray(body.wantedFeatures) || 'None selected'}</td></tr>
      </table>

      <h2 style="font-size:16px;color:#f59e0b;border-bottom:1px solid #2d1b69;padding-bottom:8px;margin-bottom:16px;">Your Letter</h2>
      <table style="width:100%;color:#fdf4e7;font-size:14px;margin-bottom:16px;">
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;width:180px;">NPS</td><td style="font-size:18px;font-weight:bold;color:#f59e0b;">${escapeHtml(String(body.nps || 0))}/10</td></tr>
        <tr><td style="color:#a89bc2;padding:4px 16px 4px 0;">Quote permission</td><td>${escapeHtml(body.quotePermission) || 'Not provided'}</td></tr>
      </table>
      ${body.letterToSumeet ? `
        <div style="background:#2d1b69;border-radius:12px;padding:24px;margin-top:16px;border-left:3px solid #f59e0b;">
          <p style="color:#a89bc2;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Letter to Sumeet</p>
          <p style="color:#fdf4e7;font-size:16px;font-style:italic;line-height:1.7;">"${escapeHtml(body.letterToSumeet)}"</p>
        </div>
      ` : ''}
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Rooh Beta Feedback <noreply@navuraah.com>',
        to: 'hello@navuraah.com',
        reply_to: body.email,
        subject: `Beta Feedback from ${body.email}`,
        html: html,
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
