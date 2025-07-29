'use client'

import { useState } from 'react'

export default function TestChat() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    setResponse('')
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: message || 'Hello' }]
        }),
      })
      
      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      setResponse('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl mb-4">Chatbot API Test</h1>
      
      <div className="space-y-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          className="w-full p-2 bg-gray-800 rounded"
        />
        
        <button
          onClick={testAPI}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          {loading ? 'Testing...' : 'Test API'}
        </button>
        
        {response && (
          <div className="mt-4 p-4 bg-gray-900 rounded">
            <pre className="text-sm">{response}</pre>
          </div>
        )}
      </div>
    </div>
  )
}