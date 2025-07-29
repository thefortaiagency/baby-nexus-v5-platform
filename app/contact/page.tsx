'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! Your message has been sent. We\'ll get back to you soon! 🚀');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };
  
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-blue-100 text-center mb-16 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's talk about how Baby NEXUS can help!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-blue-200 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-200 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-200 mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitMessage && (
                    <p className="text-green-400 text-center mt-4">{submitMessage}</p>
                  )}
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                  <p className="text-blue-100 mb-4">
                    We typically respond within 2-4 hours during business hours. For urgent matters, 
                    use our AI chatbot for immediate assistance!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-blue-200">
                      <span className="text-2xl">📧</span>
                      <span>hello@babynexus.ai</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-200">
                      <span className="text-2xl">🌐</span>
                      <span>baby-nexus-v5.thefortaiagency.ai</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-200">
                      <span className="text-2xl">⚡</span>
                      <span>Response time: 2-4 hours</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose NEXUS?</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li>✅ Platforms deployed in under 2 minutes</li>
                    <li>✅ AI-powered features included</li>
                    <li>✅ Custom domain setup included</li>
                    <li>✅ GitHub integration for updates</li>
                    <li>✅ 24/7 AI support available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}