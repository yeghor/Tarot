import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

import MainPage from './contents/mainPage'
import NavbarComp from './contents/navBar';
import Footer from './contents/footer';

import LocalizationWrapper from './localization/localizationWrapper';

// Wrap every component that contains content that can be localized in LocalizationWrapper

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen w-full bg-fuchsia-100 flex flex-col relative"> 
      
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl pointer-events-none"></div>

      <div className="relative z-20 w-full">
        <LocalizationWrapper>
            <NavbarComp />
        </LocalizationWrapper>
      </div>

      <div className="relative z-10 w-full flex-grow flex items-center justify-center py-12">
        <LocalizationWrapper>
            <MainPage />
        </LocalizationWrapper>
      </div>

      <div className="relative z-20 w-full">
        <LocalizationWrapper>
            <Footer />
        </LocalizationWrapper>
      </div>
      
    </div>
  </StrictMode>,
)

/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<div className="min-h-screen w-full bg-fuchsia-100 flex items-center justify-center relative overflow-hidden">   
    <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl"></div> 
    <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl"></div>

    <div className="absolute top-0 left-0 w-full">
        <NavbarComp />
    </div>

    <div className="relative z-10 w-full">
        <MainPage />
    </div>

    <div className="absolute bottom-0 left-0 w-full">
        <Footer />
    </div>
      
  </div>
  </StrictMode>,
)
   */