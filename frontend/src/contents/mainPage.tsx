import { useContext, useState } from "react";

import { type PredictionTypes } from "../project_types";
import { fetchPredict, MEDIA_URL as mediaURLMaker } from "../fetching/fetching";
import '../index.css'; 

import { type Card } from "../fetching/fetching";
import Markdown from "../markdown";

import { LocalizationContext } from "../localization/localizationWrapper";
import { mapLocalization } from "../localization/localizationMapper";
import { localizationObj } from "../localization/localization";

const MainPage = () => {
    const [ loading, setLoading ] = useState(false);

    let localization = useContext(LocalizationContext);
    if(!localization) {
        localization = [mapLocalization("ENG"), "ENG"]
    }

    const localizationData = localization[0];

    const [ predType, setPredType ] = useState<PredictionTypes>("love");
    const [ prompt, setPrompt ] = useState("");

    const [ readyPrediction, setReadyPrediction ] = useState<string | null>(null);
    const [ cards, setCards ] = useState<Card[]>([]); 

    const changeType = (changeTo: string) => {
        if (predType !== changeTo) {
            setPredType(changeTo as PredictionTypes);
        }
    };

    const makePrediction = async () => {
        setLoading(true);
        try {
            const prediction = await fetchPredict(predType, prompt, localization[1]);
            if (prediction) {
                setReadyPrediction(prediction.prediction);
                setCards(prediction.cards);
            } else {
                setReadyPrediction("Failed to get prediction");
            }
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="min-h-screen w-full flex items-start justify-center pt-20 pb-10 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px]"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#a78bfa 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="relative z-10 w-2/3 mx-auto p-8 rounded-3xl transition-all duration-300
                bg-white dark:bg-slate-900/90 
                dark:backdrop-blur-md 
                border border-transparent dark:border-slate-800 
                shadow-[0_20px_50px_rgba(139,92,246,0.15)] dark:shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                
                <div className="text-center mb-8">
                    <p className="text-3xl font-bold text-slate-800 dark:text-slate-100 dark:drop-shadow-md transition-colors">
                        {localizationData.predictionTitle}
                    </p>
                    <div className="h-1 w-20 mx-auto mt-2 rounded-full transition-all duration-300
                        bg-violet-500 dark:bg-gradient-to-r dark:from-violet-600 dark:to-indigo-600 dark:shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                    </div>
                </div>

                <div className="mb-6">
                    <input
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full rounded-2xl px-5 py-4 border-2 transition-colors focus:outline-none
                            bg-slate-50 dark:bg-slate-950 
                            border-slate-200 dark:border-slate-800 
                            text-slate-700 dark:text-slate-200 
                            placeholder-slate-400 dark:placeholder-slate-600 
                            focus:border-violet-400 dark:focus:border-violet-500 
                            focus:bg-white dark:focus:ring-1 dark:focus:ring-violet-500"
                        type="text"
                        placeholder={localizationData.mainInputPlaceHolder}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {localizationData.mainButtonTitle.map((type: string, index: number) => (
                        <div
                            key={type}
                            onClick={() => changeType(localizationObj.mainButtonTitle.ENG[index])}
                            className={`
                                cursor-pointer py-3 px-4 rounded-xl text-center font-semibold transition-all duration-200 border
                                ${predType === localizationObj.mainButtonTitle.ENG[index]
                                    ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 ring-2 ring-violet-500 dark:ring-0 dark:border-violet-500/50 dark:shadow-[0_0_15px_rgba(139,92,246,0.2)] border-transparent"
                                    : "bg-slate-50 dark:bg-slate-800 border-transparent dark:border-slate-700 text-slate-500 hover:bg-violet-50 dark:hover:bg-slate-700 hover:text-violet-600 dark:hover:text-slate-300 dark:hover:border-slate-600"
                                }
                            `}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </div>
                    ))}
                </div>

                <div onClick={() => makePrediction()}>
                    <button className="w-full font-bold py-4 rounded-2xl transition-all active:scale-[0.98]
                        bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-200
                        dark:bg-gradient-to-r dark:from-violet-700 dark:to-indigo-700 dark:hover:from-violet-600 dark:hover:to-indigo-600 
                        dark:shadow-violet-900/50 dark:hover:shadow-violet-600/40 dark:border dark:border-violet-600/20">
                        {localizationData.predictionButtonTitle}
                    </button>
                </div>

                {!loading ? 
                    <div className="p-4">
                        <ul className="p-4">
                            {cards.map((card) => {
                                return(
                                    <div className={`rounded-xl p-4 my-4 shadow-md border-2 columns-2 hover:scale-[1.02] transition-all duration-300
                                        ${card.flipped 
                                            ? "bg-violet-100 dark:bg-violet-900/20 border-transparent dark:border-violet-500/30 dark:shadow-violet-900/20" 
                                            : "bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 dark:shadow-black/20"} 
                                    `}>
                                        <p className="col-1 font-bold text-violet-800 dark:text-violet-400 py-2 text-lg">{card.name}</p>
                                        <p className="text-gray-700 dark:text-slate-300 col-1 py-2 leading-relaxed">{card.description}</p>
                                        <p className={`font-bold text-sm py-2 ${card.flipped ? "text-violet-500 dark:text-pink-400" : "text-violet-500 dark:text-slate-500"}`}>
                                            {card.flipped ? "Flipped" : "Regular"}
                                        </p>

                                        <img className="h-40 col-2 mx-auto drop-shadow-md rounded-md" src={mediaURLMaker(card.image_name)} alt="card image" />
                                    </div>
                                )
                            })}
                        </ul>

                        <p className="font-bold text-xl mt-6 border-b pb-2
                            text-gray-900 border-gray-200
                            dark:text-slate-100 dark:border-slate-700">
                            {readyPrediction ? localizationData.predictionTitleMessage : null}
                        </p>
                        
                        <div className="my-4 text-gray-800 dark:text-slate-300 prose-invert leading-7">
                            {Markdown(readyPrediction ?? undefined)}
                        </div>
                    </div>
                    :   
                    <div className="flex items-center justify-center h-64">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-t-transparent animate-spin
                                border-violet-700 dark:border-violet-500">
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
};

export default MainPage;