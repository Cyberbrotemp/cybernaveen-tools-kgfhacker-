import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, Terminal } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Security Tools",
      description: "Access a comprehensive collection of cybersecurity and penetration testing tools.",
      link: "/tools"
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Development Resources",
      description: "Find essential tools for secure software development and testing.",
      link: "/tools"
    },
    {
      icon: <Terminal className="w-12 h-12 text-indigo-600" />,
      title: "Latest Tech News",
      description: "Stay updated with the latest in cybersecurity and technology.",
      link: "/news"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: 'url(https://i.ibb.co/cS6d1cMj/hacker-gif.gif)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Hacker Tools Platform</h1>
          <p className="text-xl mb-8">Your one-stop destination for cybersecurity tools and resources</p>
          <Link 
            to="/tools" 
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Explore Tools
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={index}
              to={feature.link}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center text-indigo-600 hover:text-indigo-800">
                Learn More <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}