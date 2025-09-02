/* eslint-disable quotes */
import { Link } from 'react-router-dom';
import ServicesData from '../Data/ServicesData';

function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-green mb-6 relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-gold rounded-full"></span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Wakeel App revolutionizes legal consultations. Clients register, search attorneys by location or specialty, 
            and book appointments instantly. Post cases for competitive bidding, while lawyers manage schedules 
            and create digital prescriptions seamlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {ServicesData.map((item, _index) => (
            <div 
              key={item.title} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-primary-green/20"
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-green to-green-500 rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.image}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center group-hover:text-primary-green transition-colors duration-300">
                {item.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 text-center leading-relaxed mb-6 line-clamp-3">
                {item.description}
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link to="https://play.google.com/store/apps" target="_blank">
                  <button className="bg-gradient-to-r from-accent-gold to-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:from-yellow-500 hover:to-accent-gold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Explore Now
                  </button>
                </Link>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-primary-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary-green to-gray-900 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust Wakeel App for their legal needs
            </p>
            <Link to="https://play.google.com/store/apps" target="_blank">
              <button className="bg-gradient-to-r from-primary-green to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-500 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Download Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;