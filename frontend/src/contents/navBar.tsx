import React, { useState, useEffect, useContext } from 'react';
import { LanguageSwitcherStateContext, LocalizationContext } from '../localization/localizationWrapper';
import Switcher from './switcher';
import { mapLocalization } from '../localization/localizationMapper';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);

    const [theme, setTheme] = useState('light');

    const switchLocalizationState = useContext(LanguageSwitcherStateContext)
    let localization = useContext(LocalizationContext);

    if(!localization) {
        localization = [mapLocalization("ENG"), "ENG"]
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    };

    const localizationData = localization[0];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header 
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled || isOpen 
                ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-white/20' 
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
                <div className="flex items-center justify-between h-20">
                    
                    <div className="flex items-center gap-3 z-10">
                        <button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-all duration-300 active:shadow-[0_0_15px_rgba(168,85,247,0.8)] active:text-purple-500 active:scale-95"
                            aria-label="Toggle Theme"
                        >
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 hover:text-inherit active:text-inherit">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300 hover:text-inherit active:text-inherit">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                        </button>
                        
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent cursor-pointer tracking-wide hover:opacity-80 transition-opacity">
                            Taro 
                        </Link>
                    </div>

                    <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center gap-8 list-none">
                            {localizationData.mainNavbarTitle.map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={
                                            item === 'Home' || item === 'головна'
                                            ? '/'
                                            : item === 'All Cards' || item === 'Всі карти'
                                            ? '/allCards'
                                            : item === 'About us' || item === 'Про нас'
                                            ? '/aboutUs'
                                            : item === 'GitHub'
                                            ? 'https://github.com/yeghor/Tarot'
                                            : '/'
                                        }
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-800 font-semibold hover:text-purple-600 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4 z-10">
                        <div className="hidden md:block">
                             <Switcher switchState={switchLocalizationState} />
                        </div>
                       
                        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                            <div className="w-6 h-6 flex flex-col justify-between group">
                                <span className={`h-0.5 w-full bg-gray-800 rounded-lg transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5 bg-red-500' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-800 rounded-lg transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-800 rounded-lg transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-3 bg-red-500' : ''}`}></span>
                            </div>
                        </div>
                    </div>

                    <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'}`}>
                        <ul className="flex flex-col items-center gap-6 list-none w-full">
                            {localizationData.mainNavbarTitle.map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={
                                            item === 'Home' || item === 'головна'
                                            ? '/'
                                            : item === 'All Cards' || item === 'Всі карти'
                                            ? '/allCards'
                                            : item === 'About us' || item === 'Про нас'
                                            ? '/aboutUs'
                                            : item === 'GitHub'
                                            ? 'https://github.com/yeghor/Tarot'
                                            : '/'
                                        }
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl text-gray-800 font-semibold hover:text-purple-600 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Switcher switchState={switchLocalizationState} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavbarComp;