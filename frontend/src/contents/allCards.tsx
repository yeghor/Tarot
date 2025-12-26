import React, { useContext, useState, useEffect, useRef } from "react";
import { fetchAllCards, type FullCard } from "../fetching/fetching";
import FullCardComp from "./card";

import { LocalizationContext } from "../localization/localizationWrapper";
import { mapLocalization } from "../localization/localizationMapper";
// import { localizationObj } from "../localization/localization";

const AllCards = () => {
    let localization = useContext(LocalizationContext);
    if(!localization) {
        localization = [mapLocalization("ENG"), "ENG"]
    }

    const localizationData = localization[0];
    
    const [cards, setCards] = useState<FullCard[]>([]);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadCards = async () => {
            const cardsResponse = await fetchAllCards();
            if (cardsResponse) {
                setCards(cardsResponse.cards);
            }
        };
        loadCards();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 600; 
            
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div className="w-full py-12 bg-slate-50 min-h-screen flex flex-col justify-center relative">
            <div className="px-8 mb-6 text-center">
                <h1 className="text-3xl font-bold text-slate-800">{localizationData.mainCardsTitle}</h1>
                <p className="text-slate-500 mt-2 text-sm">
                    {localizationData.mainCardsText}
                </p>
            </div>

            <div className="relative group w-full max-w-[95%] mx-auto">
                
                {/* left */}
                <button
                    onClick={() => scroll('left')}
                    className="
                        absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-50
                        w-12 h-12 flex items-center justify-center
                        bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full
                        shadow-lg text-violet-600
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        hover:bg-violet-600 hover:text-white hover:scale-110
                        disabled:opacity-0 cursor-pointer
                    "
                    aria-label="Scroll Left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div
                    ref={scrollContainerRef}
                    onWheel={handleWheel}
                    className="
                        flex overflow-x-auto gap-8 px-4 py-8
                        snap-x snap-mandatory
                        scrollbar-hide scroll-smooth
                        [scrollbar-width:none] [-ms-overflow-style:none] 
                        [&::-webkit-scrollbar]:hidden
                    "
                >
                    {cards.map((card) => (
                        <FullCardComp key={card.name} card={card} />
                    ))}
                </div>

                {/* right */}
                <button
                    onClick={() => scroll('right')}
                    className="
                        absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-50
                        w-12 h-12 flex items-center justify-center
                        bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full
                        shadow-lg text-violet-600
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        hover:bg-violet-600 hover:text-white hover:scale-110
                        cursor-pointer
                    "
                    aria-label="Scroll Right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AllCards;