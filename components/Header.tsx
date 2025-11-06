"use client";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-mend-neutral-200">
      <div className="max-w-container mx-auto container-spacing py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-mend-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-mend-neutral-900">Mend</h1>
              <p className="text-sm text-mend-neutral-600">InfoSec Portal</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className="text-mend-neutral-700 hover:text-mend-primary-600 font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="#policies" 
              className="text-mend-neutral-700 hover:text-mend-primary-600 font-medium transition-colors"
            >
              Policies
            </a>
            <a 
              href="#calendar" 
              className="text-mend-neutral-700 hover:text-mend-primary-600 font-medium transition-colors"
            >
              Calendar
            </a>
            <a 
              href="#news" 
              className="text-mend-neutral-700 hover:text-mend-primary-600 font-medium transition-colors"
            >
              News
            </a>
          </nav>
        </div>
        <div className="mt-2 text-sm text-mend-neutral-500">
          <nav className="flex space-x-2" aria-label="Breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span className="text-mend-neutral-900 font-medium">InfoSec Portal</span>
          </nav>
        </div>
      </div>
    </header>
  );
}

