"use client";

export default function HeroBanner() {
  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  
  return (
    <div className="relative bg-gradient-to-r from-mend-primary-600 to-mend-primary-800 text-white py-16">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url("${patternUrl}")` }}
        aria-hidden="true"
      ></div>
      <div className="relative max-w-container mx-auto container-spacing text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Information Security
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-normal">
          Preserving Confidentiality, Integrity, and Availability of Mend systems and data.
        </p>
      </div>
    </div>
  );
}

