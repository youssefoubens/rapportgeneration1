'use client'
import { FaFlask, FaChartLine, FaFilePdf, FaShieldAlt, FaUsers, FaSyncAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      icon: <FaFlask className="text-4xl mb-4 text-blue-600" />,
      title: "Advanced Lab Analysis",
      description: "Automated analysis of your lab results with AI-powered insights and recommendations.",
      highlight: "Get smarter results"
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-green-600" />,
      title: "Data Visualization",
      description: "Beautiful charts and graphs to help you understand your data at a glance.",
      highlight: "See the big picture"
    },
    {
      icon: <FaFilePdf className="text-4xl mb-4 text-red-600" />,
      title: "Professional Reports",
      description: "Generate publication-ready PDF reports with customizable templates.",
      highlight: "Impressive outputs"
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-purple-600" />,
      title: "Data Security",
      description: "Enterprise-grade security with end-to-end encryption for your sensitive data.",
      highlight: "Your data is safe"
    },
    {
      icon: <FaUsers className="text-4xl mb-4 text-orange-600" />,
      title: "Collaboration Tools",
      description: "Share and collaborate on reports with your team members in real-time.",
      highlight: "Work together"
    },
    {
      icon: <FaSyncAlt className="text-4xl mb-4 text-teal-600" />,
      title: "Automatic Updates",
      description: "Always have the latest features without any manual updates required.",
      highlight: "Stay current"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-blue-600">Your Lab Reports</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Everything you need to create, analyze, and share professional laboratory reports with ease.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/auth/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Get Started
            </Link>
            <Link 
              href="/demo/preview" 
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Lab Reports?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of researchers and lab professionals who trust our platform for their reporting needs.
          </p>
          <Link 
            href="/auth/signup" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Reports Generated</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Labs Using</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </section>
    </div>
  )
}