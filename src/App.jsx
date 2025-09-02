/* eslint-disable quotes */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';
import Home from './Pages/Home';
import BlogPost from './Pages/BlogPost';
import NotFound from './Pages/NotFound';
import connectWithUs from './Data/connectWithUs';
import TermsAndConditions from './Pages/TermsAndCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FAQs from './Pages/FAQs';

// Custom styles for animations and effects not available in Tailwind
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  * {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-6 {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .backdrop-blur-xs {
    backdrop-filter: blur(2px);
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
  
  .bg-gradient-conic {
    background: conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops));
  }
  
  .animate-spin-slow {
    animation: spin 20s linear infinite;
  }
  
  .animate-spin-reverse {
    animation: spin 20s linear infinite reverse;
  }
  
  /* FAQ Styles */
  .accordion {
    transition: all 0.3s ease;
  }
  
  .accordion.active {
    background-color: rgb(243, 244, 246);
  }
  
  .panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, padding 0.3s ease-in-out;
  }
  
  .panel.open {
    max-height: 500px;
  }
  
  /* Terms and Privacy Policy Styles */
  .terms-paragraph, .privacy-paragraph {
    font-style: italic;
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #03da03;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #ca9d3e;
  }
`;

function ScrollToTop({ children }) {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return children;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inject custom styles
    const style = document.createElement('style');
    style.textContent = customStyles;
    document.head.appendChild(style);

    // Loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      // Cleanup styles when component unmounts
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />

      {!isLoading && (
        <div className="min-h-screen bg-white">
          <BrowserRouter>
            <ScrollToTop>
              <div className="flex flex-col min-h-screen">
                <Header />
                
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {connectWithUs.map((post) => (
                      <Route key={post.link} path={post.link} element={<BlogPost post={post} />} />
                    ))}
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                
                <Footer />
              </div>
            </ScrollToTop>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;