"use client";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mend</h1>
              <p className="text-sm text-gray-600">InfoSec Portal</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#policies" className="text-gray-700 hover:text-blue-600 transition">
              Policies
            </a>
            <a href="#calendar" className="text-gray-700 hover:text-blue-600 transition">
              Calendar
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 transition">
              News
            </a>
          </nav>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <nav className="flex space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900">InfoSec Portal</span>
          </nav>
        </div>
      </div>
    </header>
  );
}

