/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import { logo } from "../Images";

function Preloader({ isLoading }) {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingPercentage((prevPercentage) => 
          prevPercentage < 100 ? prevPercentage + 1 : prevPercentage
        );
      }, 30);
    } else {
      setTimeout(() => {
        setLoadingPercentage(100);
      }, 500);
      setTimeout(() => {
        clearInterval(interval);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-secondary-green via-gray-900 to-dark-bg flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-primary-green/30 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with Loading Effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary-green/30 rounded-full blur-2xl animate-pulse"></div>
          <div 
            className="relative w-32 h-12 bg-cover bg-center bg-no-repeat transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to top, transparent ${loadingPercentage}%, rgba(255,255,255,0.9) ${loadingPercentage}%), url(${logo})`,
            }}
          />
        </div>

        {/* Loading Text and Progress */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Loading Wakeel App
          </h2>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-green to-accent-gold transition-all duration-300 ease-out"
              style={{ width: `${loadingPercentage}%` }}
            />
          </div>
          
          {/* Percentage */}
          <p className="text-lg font-light text-gray-300">
            {loadingPercentage}%
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary-green rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary-green rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-primary-green rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;