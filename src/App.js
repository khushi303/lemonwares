import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeaderTab from './components/HeaderTab';
import WebHosting from './components/WebHosting';
import CardsSvg from './components/CardsSvg';
import GetStarted from './components/GetStarted';
import Stories from './components/Stories';
import Work from './components/Work';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import Loader from './components/Loader';
import BackToTop from './assets/images/png/topbutton.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ---------aos------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  });
  // -----------pre-loader-----------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {screenLoading ? (
        <>
          <div className='fixed min-h-screen bg-[#b00000] top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='max-w-[150px] w-full'>
              <Loader />
            </div>

          </div>

        </>

      ) : (
        <div className='overflow-hidden'>
          <Header />
          <HeaderTab />
          <WebHosting />
          <CardsSvg />
          <GetStarted />
          <Stories />
          <Work />
          <GetInTouch />
          <Footer />
          <div className='fixed bottom-4 right-4 z-[6] cursor-pointer'>
            <div className={`${backToTop ? '' : 'hidden'} fixed rounded-[8px] border border-solid border-white bottom-[4%] right-[2%] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] cursor-pointer animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center`} onClick={() => top()}>
              <img src={BackToTop} alt="Backtotop" className='w-full rounded-[8.6px]' />
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default App;
