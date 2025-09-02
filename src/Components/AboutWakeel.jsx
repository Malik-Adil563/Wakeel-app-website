import React from 'react';
import { Users, Target, Scale, Shield, CheckCircle, Star } from 'lucide-react';
import { Profile } from '../Images';

function Responsive() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-accent-gold" />,
      title: 'Our Mission',
      description:
        'Empowering Your Legal Journey - At our app, our mission is simple - to empower individuals with reliable legal advice and support. We believe in demystifying the complexities of the law, making it accessible to everyone, anytime, and anywhere.',
    },
    {
      icon: <Users className="w-8 h-8 text-accent-gold" />,
      title: 'Our Team',
      description:
        'Experts You Can Trust - Meet the dedicated team of skilled attorneys behind our app. With a passion for justice and a commitment to excellence, our experts are here to guide you through your legal challenges and ensure your rights are protected.',
    },
  ];

  return (
    <div className="space-y-8 lg:space-y-12">
      {features.map((feature, index) => (
        <div key={index} className="group">
          <div className="flex items-start space-x-4 mb-4">
            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-accent-gold/10 to-yellow-500/10 rounded-xl group-hover:from-accent-gold/20 group-hover:to-yellow-500/20 transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-primary-green transition-colors duration-300">{feature.title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg pl-16">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

function AboutWakeel() {
  const appFeatures = ['Experienced attorneys', 'Making legal guidance just a tap away', '24/7 Legal Support', 'Secure & Confidential'];

  return (
    <>
      {/* About Section */}
      <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary-green/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent-gold/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-gold/10 to-yellow-500/10 rounded-full text-accent-gold font-semibold text-sm tracking-wide uppercase">
                  <Scale className="w-4 h-4 mr-2" />
                  Legal Excellence
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                  About
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600"> Wakeel </span>
                  App
                </h1>
              </div>

              {/* App Description */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary-green/10 to-emerald-600/10 rounded-xl">
                    <Shield className="w-8 h-8 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Our App</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Access Legal Expertise at Your Fingertips. Discover the ultimate online legal advisor that puts the power of legal knowledge in your hands. Our app provides instant access to:
                    </p>

                    {/* Feature List */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {appFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 group">
                          <CheckCircle className="w-5 h-5 text-primary-green group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-gray-700 group-hover:text-primary-green transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Mission & Team */}
              <div className="hidden lg:block">
                <Responsive />
              </div>
            </div>

            {/* Right Side */}
            <div className="relative">
              <div className="relative">
                {/* Background Decorations */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-gold/20 to-yellow-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary-green/20 to-emerald-600/20 rounded-full blur-xl"></div>

                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute top-4 right-4 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-gold fill-current" />
                    ))}
                  </div>
                  <img src={Profile} alt="Legal professionals at work" className="w-full h-auto rounded-2xl shadow-lg" />

                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-green">500+</div>
                      <div className="text-sm text-gray-600">Legal Experts</div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-gold">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Mission & Team */}
          <div className="lg:hidden mt-16">
            <Responsive />
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary-green to-emerald-600 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Get Legal Help?</h3>
              <p className="text-lg lg:text-xl mb-8 text-green-100">Join thousands of satisfied users who trust Wakeel App for their legal needs</p>
              <button className="bg-white text-primary-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutWakeel;
