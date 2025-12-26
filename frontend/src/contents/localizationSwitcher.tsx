import React, { useContext } from 'react';
import type { LanguageStateSwitcherType } from '../localization/localizationWrapper';
import { LocalizationContext } from '../localization/localizationWrapper';

interface LangSwitcherProps {
    switchState: LanguageStateSwitcherType | null;
}

const Switcher = (props: LangSwitcherProps) => {

    const localization = useContext(LocalizationContext);
    const currentLang = (localization ? localization[1] : "ENG");
    const isEng = currentLang === "ENG";

    const toggleLanguage = () => {
        if (!props.switchState) return;

        props.switchState((prevState) => {
            return prevState === "ENG" ? "UA" : "ENG";
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            className="relative w-19 h-8 bg-violet-600 rounded-full flex items-center justify-between p-1 cursor-pointer shadow-xl hover:bg-violet-700 transition-colors duration-300 group"
            aria-label="Switch Language"
        >
            <div
                className={`
                    absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-md 
                    transform transition-transform duration-300 ease-in-out
                    ${isEng ? 'translate-x-[100%]' : 'translate-x-0'}
                `}
            />

            <span 
                className={`
                    z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300
                    ${!isEng ? 'text-violet-600' : 'text-white/80'}
                `}
            >
                UA
            </span>

            <span 
                className={`
                    z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300
                    ${isEng ? 'text-violet-600' : 'text-white/80'}
                `}
            >
                EN
            </span>
        </button>
    );
};

export default Switcher;
//w-24 h-12