import React from 'react';
import { Tool } from '../types';
import { Shield, Download, Info } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { tools } from '../data/tools';

export default function ToolsPage() {
  const { user, saveToolToProfile } = useAuth();

  const handleSaveTool = (tool: Tool) => {
    if (!user) {
      toast.error('Please login to save tools');
      return;
    }
    saveToolToProfile(tool.id);
    toast.success(`${tool.name} saved to your profile`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Security Tools Collection</h1>
        
        {tools.map((category) => (
          <div key={category.category} className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold">{category.category}</h2>
              <div className="ml-4 h-1 flex-grow bg-indigo-600 rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((tool) => (
                <div key={tool.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={tool.imageUrl} 
                    alt={tool.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {category.category}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSaveTool(tool)}
                          className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                          title="Save Tool"
                        >
                          <Shield size={20} />
                        </button>
                        <a
                          href={tool.pdfUrl}
                          className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                          title="Documentation"
                        >
                          <Info size={20} />
                        </a>
                        <a
                          href={tool.downloadUrl}
                          className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                          title="Download"
                        >
                          <Download size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}