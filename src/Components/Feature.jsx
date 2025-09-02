import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import featureSection from '../Data/featureSection';

function Feature() {
  return (
    <section id="features" className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary-green/10 to-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent-gold/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-green/10 to-emerald-600/10 rounded-full text-primary-green font-semibold text-sm tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
            Everything You Need for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600"> Legal Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Discover powerful features designed to make legal assistance accessible, efficient, and reliable for everyone.</p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16 lg:space-y-24">
          {featureSection.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                grid lg:grid-cols-2 gap-8 lg:gap-16 items-center
                ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}
              `}
            >
              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Feature Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-600">
                  <div className="w-2 h-2 bg-primary-green rounded-full mr-2 animate-pulse"></div>
                  Feature {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                  {feature.title}
                  {feature.greenTitle && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600">{` ${feature.greenTitle}`}</span>}
                </h3>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{feature.detail}</p>

                {/* Feature Highlights */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center space-x-2 bg-primary-green/5 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-primary-green" />
                    <span className="text-sm font-medium text-primary-green">Secure</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-accent-gold/5 px-4 py-2 rounded-full">
                    <Zap className="w-4 h-4 text-accent-gold" />
                    <span className="text-sm font-medium text-accent-gold">Fast</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/5 px-4 py-2 rounded-full">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-blue-500">Reliable</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-green to-emerald-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  {/* Background Decoration */}
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-br rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500
                    ${index % 2 === 0 ? 'from-primary-green/50 to-emerald-600/50' : 'from-accent-gold/50 to-yellow-500/50'}
                  `}
                  ></div>

                  {/* Image Container */}
                  <div className="relative bg-white rounded-3xl p-4 lg:p-6 shadow-2xl group-hover:shadow-3xl transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Top Bar */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>

                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <img src={feature.img} alt={`${feature.title} feature illustration`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />

                      {/* Overlay Effect */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      `}
                      ></div>
                    </div>

                    {/* Floating Elements */}
                    <div
                      className={`
                      absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300
                      ${index % 2 === 0 ? 'bg-gradient-to-br from-primary-green to-emerald-600' : 'bg-gradient-to-br from-accent-gold to-yellow-500'}
                    `}
                    >
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Side Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${index % 2 === 0 ? 'text-primary-green' : 'text-accent-gold'}`}>99%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Experience These Features?</h3>
            <p className="text-lg lg:text-xl mb-8 text-gray-300">Download Wakeel App today and transform your legal experience</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-green to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-lg">
                Download Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
