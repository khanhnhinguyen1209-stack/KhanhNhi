'use client';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">Khánh Nhi</span> 
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Trang chủ</a>
            <a href="#about" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Giới thiệu</a>
            <a href="#skills" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Kỹ năng</a>
            <a href="#projects" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Dự án</a>
            <a href="#contact" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Liên hệ</a>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block nav-link text-gray-700 hover:text-blue-600 font-medium">Trang chủ</a>
            <a href="#about" className="block nav-link text-gray-700 hover:text-blue-600 font-medium">Giới thiệu</a>
            <a href="#skills" className="block nav-link text-gray-700 hover:text-blue-600 font-medium">Kỹ năng</a>
            <a href="#projects" className="block nav-link text-gray-700 hover:text-blue-600 font-medium">Dự án</a>
            <a href="#contact" className="block nav-link text-gray-700 hover:text-blue-600 font-medium">Liên hệ</a>
          </div>
        )}
      </div>
    </nav>
  );
}