/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import connectWithUs from '../Data/connectWithUs';

function ConnectWithUs() {
  const [slides, setSlides] = useState(2);
  const [space, setSpace] = useState(30);
  const navigate = useNavigate();

  const resizeSlider = () => {
    if (window.innerWidth > 768) {
      setSlides(2);
      setSpace(40);
    } else if (window.innerWidth > 425 && window.innerWidth <= 768) {
      setSlides(1);
      setSpace(20);
    } else {
      setSlides(1);
      setSpace(15);
    }
  };

  useEffect(() => {
    resizeSlider();
    window.addEventListener('resize', resizeSlider);
    return () => {
      window.removeEventListener('resize', resizeSlider);
    };
  }, []);

  return (
    <section id="connect-with-us" className="px-4 py-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 relative inline-block">
        Connect With Us
        <span className="block w-16 h-1 bg-indigo-600 mx-auto mt-3 rounded"></span>
      </h1>

      <Swiper spaceBetween={space} slidesPerView={slides} modules={[Navigation]} className="mySwiper">
        {connectWithUs.map((card) => (
          <SwiperSlide key={card.id} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{card.heading}</h2>
            <p className="text-gray-600 mb-5">{card.paragraph}</p>
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300" onClick={() => navigate(card.link)}>
              Read More
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ConnectWithUs;
