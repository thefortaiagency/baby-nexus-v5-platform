import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                About Baby NEXUS V5
              </span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-blue-100 mb-6">
                Baby NEXUS V5 represents the cutting edge of AI-powered platforms. We're not just building websites - 
                we're creating intelligent experiences that adapt, learn, and grow with your business.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">What Makes Us Different</h2>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>Lightning-fast deployment in under 2 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <span>AI-powered features built into every platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <span>Beautiful, modern designs with glassmorphism effects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <span>Real-time analytics and insights</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">The Technology</h2>
              <p className="text-blue-100">
                Built with Next.js 14, TypeScript, Tailwind CSS, and powered by OpenAI's GPT models. 
                Every platform we create is production-ready, scalable, and includes automated deployment 
                to Vercel with custom domain configuration via GoDaddy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}