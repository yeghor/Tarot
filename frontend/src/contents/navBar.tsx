import React, { useState, useEffect, useContext } from 'react';
import { LanguageSwitcherStateContext, LocalizationContext } from '../localization/localizationWrapper';
import Switcher from './localizationSwitcher';
import ThemeSwitcher from './themeSwitcher'; 
import { mapLocalization } from '../localization/localizationMapper';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);

    const switchLocalizationState = useContext(LanguageSwitcherStateContext)
    let localization = useContext(LocalizationContext);

    if(!localization) {
        localization = [mapLocalization("ENG"), "ENG"]
    }

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
                ? 'bg-white/80 dark:bg-[#0a0a1a]/90 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-purple-900/30 dark:shadow-purple-900/10' 
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
                <div className="flex items-center justify-between h-20">
                    
                    <div className="flex items-center gap-3 z-10">
                        <ThemeSwitcher />
                        
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
                                            item === 'Home' || item === 'головна' ? '/' : 
                                            item === 'All Cards' || item === 'Всі карти' ? '/allCards' : 
                                            item === 'About us' || item === 'Про нас' ? '/aboutUs' : 
                                            item === 'GitHub' ? 'https://github.com/yeghor/Tarot' : '/'
                                        }
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-800 dark:text-gray-100 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors tracking-wide"
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
                                <span className={`h-0.5 w-full bg-gray-800 dark:bg-white rounded-lg transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5 bg-purple-600 dark:bg-purple-500' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-800 dark:bg-white rounded-lg transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-gray-800 dark:bg-white rounded-lg transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-3 bg-purple-600 dark:bg-purple-500' : ''}`}></span>
                            </div>
                        </div>
                    </div>

                    <div className={`md:hidden absolute top-20 left-0 w-full 
                        bg-white dark:bg-[#0a0a1a] 
                        shadow-lg dark:shadow-purple-900/20 
                        border-t border-transparent dark:border-purple-900/30 
                        flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out 
                        ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'}`}
                    >
                        <ul className="flex flex-col items-center gap-6 list-none w-full">
                            {localizationData.mainNavbarTitle.map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={
                                            item === 'Home' || item === 'головна' ? '/' : 
                                            item === 'All Cards' || item === 'Всі карти' ? '/allCards' : 
                                            item === 'About us' || item === 'Про нас' ? '/aboutUs' : 
                                            item === 'GitHub' ? 'https://github.com/yeghor/Tarot' : '/'
                                        }
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl text-gray-800 dark:text-gray-100 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="scale-110">
                            <Switcher switchState={switchLocalizationState} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavbarComp;