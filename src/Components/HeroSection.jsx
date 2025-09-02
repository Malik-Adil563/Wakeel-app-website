/* eslint-disable quotes */
import React from 'react';
import { home } from '../Images';

function HeroSection() {
  return (
    <div 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-dark-bg via-secondary-green to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-primary-green/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary-green/20 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="block">Hire Your</span>
                <span className="block text-primary-green">Legal Expert</span>
                <span className="block">Online Now!</span>
              </h1>
              
              <div className="mt-6 w-24 h-1 bg-accent-gold rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Access top-notch legal expertise from home. Our platform connects you with skilled attorneys across all practice areas. Browse profiles, read reviews, and schedule consultations seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-gradient-to-r from-primary-green to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-500 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Started
              </button>
              <button className="border-2 border-accent-gold text-accent-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-gold hover:text-white transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-green/30 to-accent-gold/30 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                {/* Rotating Ring */}
                <div className="absolute inset-0 border-2 border-primary-green/30 rounded-full animate-spin slow"></div>
                <div className="absolute inset-4 border border-accent-gold/30 rounded-full animate-spin reverse slow"></div>
                
                {/* Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={home} 
                    alt="Legal Professional" 
                    className="h-80 lg:h-96 xl:h-[28rem] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary-green/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent-gold/20 rounded-full animate-float delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;