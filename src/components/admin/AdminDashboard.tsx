import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Bell, 
  Image, 
  BookOpen, 
  Calendar,
  Trophy,
  LogOut,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Active Announcements', value: '5', icon: Bell, color: 'bg-blue-500' },
    { title: 'Gallery Photos', value: '48', icon: Image, color: 'bg-green-500' },
    { title: 'E-Magazines', value: '12', icon: BookOpen, color: 'bg-purple-500' },
    { title: 'Training Programs', value: '8', icon: Calendar, color: 'bg-orange-500' },
  ];

  const announcements = [
    { id: 1, text: 'New batch of Dairy Management Training starting February 15, 2026', active: true },
    { id: 2, text: 'Free Veterinary Health Camp in Guntur District on January 25, 2026', active: true },
    { id: 3, text: 'SMILE Success Story Competition - Submit your story', active: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                S
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">SMILE Admin</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Content Management System</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64">
            <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'dashboard'
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <LayoutDashboard size={20} />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('announcements')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'announcements'
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Bell size={20} />
                    Announcements
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'gallery'
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Image size={20} />
                    Photo Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('emagazines')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'emagazines'
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <BookOpen size={20} />
                    E-Magazines
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('training')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'training'
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Calendar size={20} />
                    Training Programs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('success-stories')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'success-stories'
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Trophy size={20} />
                    Success Stories
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard Overview</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                            <Icon size={24} className="text-white" />
                          </div>
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                        </div>
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</h3>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Bell size={20} className="text-blue-600" />
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">New announcement published</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Image size={20} className="text-green-600" />
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">8 new photos added to gallery</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <BookOpen size={20} className="text-purple-600" />
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">E-Magazine January 2026 uploaded</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'announcements' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Announcements</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-300">
                    <Plus size={18} />
                    Add New
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Announcement
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {announcements.map((announcement) => (
                          <tr key={announcement.id}>
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                              {announcement.text}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                announcement.active
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                              }`}>
                                {announcement.active ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                <button className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors">
                                  <Edit size={18} />
                                </button>
                                <button className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors">
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'dashboard' && activeTab !== 'announcements' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Content management for {activeTab.replace('-', ' ')} will be available here.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
