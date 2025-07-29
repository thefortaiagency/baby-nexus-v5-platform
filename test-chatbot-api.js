const https = require('https');

// Test the chatbot API endpoint
const testChatbot = async () => {
  const data = JSON.stringify({
    messages: [
      { role: 'user', content: 'Hello, test message' }
    ]
  });

  const options = {
    hostname: 'baby-nexus-v5-platform.vercel.app',
    path: '/api/chat',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      console.log(`Status Code: ${res.statusCode}`);
      console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        console.log('Response:', responseData);
        resolve(responseData);
      });
    });

    req.on('error', (error) => {
      console.error('Error:', error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
};

console.log('Testing Baby NEXUS V5 Chatbot API...\n');
testChatbot().catch(console.error);