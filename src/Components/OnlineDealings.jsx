import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WakeelAccount } from '../Images';
import OnlineDealingsData from '../Data/OnlineDealingsData';

function OnlineDealings() {
  return (
    <section id="online-dealings" className="relative py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-l from-primary-green/10 to-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-r from-accent-gold/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-green/10 to-emerald-600/10 rounded-full text-primary-green font-semibold text-sm tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Digital Solutions
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4">
            Online
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600"> Legal </span>
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Comprehensive digital legal solutions tailored to your needs, accessible anytime, anywhere</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              {/* Background Effects */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-green/20 via-emerald-500/10 to-accent-gold/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transform group-hover:scale-110 transition-all duration-500"></div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary-green/30 to-emerald-600/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-accent-gold/30 to-yellow-500/30 rounded-full blur-lg animate-bounce"></div>

              {/* Main Image Container */}
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-green/20 to-accent-gold/20 rounded-full opacity-30" style={{ animation: 'spin 20s linear infinite' }}></div>
                <div className="absolute inset-4 bg-gradient-to-tl from-emerald-500/10 to-yellow-400/10 rounded-full"></div>

                {/* Image Wrapper */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={WakeelAccount}
                    alt="Online Legal Services Platform"
                    className="w-full h-full object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-300 filter group-hover:brightness-110"
                  />
                </div>

                {/* Stats Badges */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-green">24/7</div>
                    <div className="text-xs text-gray-600">Available</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-gold">1000+</div>
                    <div className="text-xs text-gray-600">Cases</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Why Choose Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600"> Digital Platform?</span>
              </h2>

              {OnlineDealingsData.map((item, _index) => (
                <div
                  key={item.id}
                  className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:bg-white hover:shadow-lg hover:border-primary-green/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-green to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        {item.icon}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary-green/20 to-emerald-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-primary-green transition-colors duration-300">{item.text}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-primary-green" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="pt-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-primary-green to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="bg-white border-2 border-primary-green text-primary-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-green hover:text-white transform hover:scale-105 transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Secure & Confidential
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Expert Legal Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Join Thousands of Satisfied Users</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Experience the future of legal services with our comprehensive digital platform</p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-green">5000+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-gold">99%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineDealings;
