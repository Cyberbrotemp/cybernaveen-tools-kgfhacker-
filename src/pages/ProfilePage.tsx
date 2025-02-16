import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Download, Info, User } from 'lucide-react';
import { tools } from '../data/tools';
import { Tool } from '../types';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Please login to view your profile</h2>
        </div>
      </div>
    );
  }

  // Get saved tools from all categories
  const savedTools = tools
    .flatMap(category => category.items)
    .filter(tool => user.savedTools.includes(tool.id));

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* User Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start space-x-6">
            {user.profile ? (
              <img
                src={user.profile}
                alt={user.username}
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={48} className="text-gray-400" />
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{user.username}</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Saved Tools:</span> {savedTools.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Saved Tools Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Saved Tools</h3>
          {savedTools.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No tools saved yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedTools.map((tool: Tool) => (
                <div key={tool.id} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">{tool.name}</h4>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {tool.category}
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={tool.pdfUrl}
                        className="p-2 text-gray-600 hover:text-indigo-600"
                        title="Documentation"
                      >
                        <Info size={20} />
                      </a>
                      <a
                        href={tool.downloadUrl}
                        className="p-2 text-gray-600 hover:text-indigo-600"
                        title="Download"
                      >
                        <Download size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}