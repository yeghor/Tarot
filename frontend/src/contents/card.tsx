import React from 'react';
import type { FullCard } from "../fetching/fetching";
import { MEDIA_URL as mediaURLMaker } from "../fetching/fetching";

const FullCardComp = ({ card }: { card: FullCard }) => {
    return (
        <div className="
            group relative flex-none w-72 snap-center
            bg-white rounded-3xl overflow-hidden
            border border-violet-100
            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
            hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)]
            hover:-translate-y-2
            transition-all duration-500 ease-out
        ">
            <div className="relative aspect-[2/3] overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                <img
                    src={mediaURLMaker(card.image_name)}
                    alt={card.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <h2 className="absolute bottom-4 left-0 right-0 z-20 text-xl font-bold text-white text-center drop-shadow-md tracking-wide px-2">
                    {card.name}
                </h2>
            </div>

            <div className="p-5 space-y-4 bg-white">
                <div className="relative pl-3 border-l-4 border-violet-500 rounded-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-violet-400 mb-0.5">
                        Upright
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                        {card.description}
                    </p>
                </div>

                <div className="relative pl-3 border-l-4 border-rose-400 rounded-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-rose-400 mb-0.5">
                        Reversed
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                        {card.flipped_description}
                    </p>
                </div>
            </div>
            
            <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-rose-400" />
        </div>
    );
};

export default FullCardComp;