import React from 'react';
import { Link, useLocation } from 'wouter';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Policy', href: '/policy' },
];

const NavigationBar: React.FC = () => {
  const [location] = useLocation();
  // Hide fixed nav on About Us page
  const isAbout = location.startsWith('/about');

  return (
    <nav className={`w-full z-50 top-0 left-0 bg-white shadow ${!isAbout ? 'fixed' : 'relative'}`} style={{transition: 'box-shadow 0.2s'}}> 
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo192.png" alt="HLSG Logo" className="h-8 w-8" />
          <span className="font-bold text-lg text-blue-900">HLSG Industries</span>
        </Link>
        {/* Menu */}
        <div className="flex space-x-6">
          {menuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-gray-700 font-medium transition-colors duration-200
                ${location === item.href ? 'text-blue-700' : 'hover:text-blue-700'}
                group`}
            >
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </Link>
          ))}
        </div>
        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Link href="/login" className="px-4 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white transition-colors">Login</Link>
          <Link href="/register" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar; 