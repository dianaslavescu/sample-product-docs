const crypto = require('crypto');
const secret = '{{ your_github_webhook_secret }}';

const signature = $input.first().json.headers['x-hub-signature-256'];
const payload = JSON.stringify($input.first().json.body);

const expected = 'sha256=' + crypto
  .createHmac('sha256', secret)
  .update(payload)
  .digest('hex');

if (signature !== expected) {
  throw new Error('Invalid webhook signature');
}

return $input.all();
