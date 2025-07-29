import Navigation from '@/components/Navigation'

export default function ServicesPage() {
  const services = [
    {
      title: 'Platform Generation',
      description: 'Complete platforms created in under 2 minutes with AI-powered features',
      icon: '🚀',
      features: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Automated Deployment']
    },
    {
      title: 'AI Integration',
      description: 'Built-in AI chatbots, analytics, and content generation',
      icon: '🤖',
      features: ['OpenAI GPT', 'Real-time Chat', 'Smart Analytics', 'Content Generation']
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for your specific business needs',
      icon: '💻',
      features: ['API Integration', 'Database Setup', 'Custom Features', 'Scalable Architecture']
    },
    {
      title: 'Deployment & DNS',
      description: 'Automated deployment with custom domain configuration',
      icon: '🌐',
      features: ['GitHub Integration', 'Vercel Deployment', 'DNS Automation', 'SSL Certificates']
    }
  ];
  
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-blue-100 text-center mb-16 max-w-3xl mx-auto">
              Transform your business with AI-powered platforms that are built for the future
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  </div>
                  <p className="text-blue-100 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-blue-200">
                        <span className="text-cyan-400">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}