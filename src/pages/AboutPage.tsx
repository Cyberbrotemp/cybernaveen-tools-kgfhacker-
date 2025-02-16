import React from 'react';
import { Github, Instagram } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://i.ibb.co/54jGhVL/IMG-20231108-190543-177.jpg"
                alt="CyberNaveen"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Developer Profile
              </div>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                CyberNaveen
              </h2>
              <div className="mt-4 text-gray-600">
                <p className="mb-4">
                  Ethical Hacker Learner & Python Developer
                </p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/naveenhacking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-6 w-6 mr-2" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://instagram.com/kgf_kgf_hackers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Instagram className="h-6 w-6 mr-2" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://instagram.com/kutty_rolex_naveen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Instagram className="h-6 w-6 mr-2" />
                    <span>Admin Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}