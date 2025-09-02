/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quotes */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';
import { logo } from '../Images';
import PrimaryNavbar from '../Data/PrimaryNavbar';

function PrimaryNav() {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.pageYOffset >= 200) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const extractRouteFromURL = (url) => {
    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    if (lastPart.startsWith('#')) {
      return '';
    }
    return lastPart;
  };

  const currentRoute = extractRouteFromURL(window.location.href);

  const handleRoute = (event) => {
    setToggle(false);
    if (currentRoute === '' || currentRoute === '/') {
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event, link) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      handleRoute(link);
    }
  };

  return (
    <nav className={`
      sticky top-0 z-40 transition-all duration-300
      ${bgColor 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'backdrop-blur-md shadow-lg border-b border-gray-800/30'
      }
    `}
    style={{
      backgroundColor: bgColor ? undefined : '#0a130a'
    }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group">
            <img 
              src={logo} 
              alt="Wakeel App Logo" 
              className="h-8 lg:h-10 w-auto transform group-hover:scale-105 transition-transform duration-300"
              onClick={() => navigate('/')} 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {PrimaryNavbar.map((item) => (
              <Link 
                key={item.id} 
                to={`/${item.link}`} 
                className={`
                  relative font-medium text-lg transition-all duration-300 group
                  ${bgColor ? 'text-gray-800 hover:text-primary-green' : 'text-white hover:text-primary-green'}
                `}
                onClick={(event) => {
                  if (currentRoute === '' || currentRoute === '/') {
                    event.stopPropagation();
                  }
                }}
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Download Button */}
          <div className="hidden lg:flex">
            <Link to="https://play.google.com/store/apps" target="_blank">
              <button className="bg-gradient-to-r from-accent-gold to-yellow-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:from-yellow-500 hover:to-accent-gold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group"
            onClick={() => setToggle(!toggle)}
          >
            <span className={`
              block w-6 h-0.5 transition-all duration-300 transform origin-center
              ${toggle ? 'rotate-45 translate-y-1' : 'rotate-0'}
              ${bgColor ? 'bg-gray-800' : 'bg-white'}
            `}></span>
            <span className={`
              block w-6 h-0.5 transition-all duration-300
              ${toggle ? 'opacity-0' : 'opacity-100'}
              ${bgColor ? 'bg-gray-800' : 'bg-white'}
            `}></span>
            <span className={`
              block w-6 h-0.5 transition-all duration-300 transform origin-center
              ${toggle ? '-rotate-45 -translate-y-1' : 'rotate-0'}
              ${bgColor ? 'bg-gray-800' : 'bg-white'}
            `}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`
        lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl transform transition-all duration-300 overflow-hidden
        ${toggle 
          ? 'opacity-100 translate-y-0 max-h-screen' 
          : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
          {PrimaryNavbar.map((item, index) => (
            <Link 
              key={item.id} 
              to={`/${item.link}`} 
              className={`
                block text-xl font-medium text-gray-800 hover:text-primary-green transition-all duration-300 transform
                ${toggle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
              onKeyDown={(event) => handleKeyDown(event, item.link)} 
              onClick={handleRoute}
            >
              {item.title}
            </Link>
          ))}

          {/* Mobile Download Button */}
          <div className="pt-4">
            <Link to="https://play.google.com/store/apps" target="_blank">
              <button 
                className={`
                  w-full bg-gradient-to-r from-accent-gold to-yellow-500 text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-yellow-500 hover:to-accent-gold transition-all duration-300 shadow-lg transform
                  ${toggle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{ transitionDelay: `${PrimaryNavbar.length * 50}ms` }}
                onClick={() => setToggle(false)}
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PrimaryNav;