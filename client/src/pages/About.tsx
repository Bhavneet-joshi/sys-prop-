import React from 'react';
import { Link } from 'wouter';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        HLSG Industries is committed to innovation, excellence, and building a better future. Learn more about our founders and the story behind our company.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <Link href="/about/founders" className="flex-1 bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">About Founders</h2>
          <p className="text-gray-600">Meet the visionaries who lead HLSG Industries. <span className="underline text-blue-700">Learn more</span></p>
        </Link>
        <Link href="/about/company" className="flex-1 bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">About Company</h2>
          <p className="text-gray-600">Discover our story, values, and the meaning behind our logo. <span className="underline text-blue-700">Explore</span></p>
        </Link>
      </div>
    </div>
  );
};

export default About;
