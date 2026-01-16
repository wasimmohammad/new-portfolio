import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (credentials: { username: string; password: string }) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // For demo purposes - in production, this would be validated against a backend
    if (username === 'admin' && password === 'smile2026') {
      onLogin({ username, password });
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              S
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              SMILE Admin Portal
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to manage website content
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User size={18} className="mr-2" />
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-800 dark:text-white"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Lock size={18} className="mr-2" />
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-800 dark:text-white"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg transition duration-300 font-medium"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
              ← Back to Website
            </a>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: smile2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
