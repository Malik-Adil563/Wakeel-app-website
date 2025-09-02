/* eslint-disable quotes */
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SecondaryNavbar from '../Data/SecondaryNavbar';

function SecondaryNav() {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 text-sm font-light tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-gray-400">
            <ChevronLeft className="w-3 h-3 -mr-1" />
            <ChevronLeft className="w-3 h-3" />
          </div>

          <span className="text-gray-300">{SecondaryNavbar.line}</span>

          <Link 
            to={SecondaryNavbar.link} 
            className="text-primary-green hover:text-accent-gold transition-colors duration-300 font-medium relative group px-2"
            target="_blank"
          >
            {SecondaryNavbar.appname}
            <span className="absolute bottom-0 left-2 w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
          </Link>

          <img 
            src={SecondaryNavbar.emoji} 
            alt={SecondaryNavbar.appname} 
            className="w-4 h-4" 
          />

          <div className="flex items-center text-gray-400">
            <ChevronRight className="w-3 h-3" />
            <ChevronRight className="w-3 h-3 -ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryNav;