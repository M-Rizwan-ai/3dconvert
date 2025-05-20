import React from 'react';
import { Cuboid as Cube, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Cube className="text-teal-400 h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-teal-400">3D</span>Convert
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Converter</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Documentation</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;