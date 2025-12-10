import { useContext, useState } from "react";

import { type PredictionTypes } from "./project_types";
import { fetchPredict, MEDIA_URL as mediaURLMaker } from "./fetching/fetching";
import './index.css'; 

import { type Card } from "./fetching/fetching";
import Markdown from "./mardown";

import { LocalizationContext } from "./localizationWrapper";
import { mapLocalization } from "./localization/localizationMapper";

const MainPage = () => {
    const [ loading, setLoading ] = useState(false);

    let localization = useContext(LocalizationContext)

    if (!localization) {
        localization = [mapLocalization("ENG"), "ENG"]
    }

    const [ predType, setPredType ] = useState<PredictionTypes>("love");
    const [ prompt, setPrompt ] = useState("");

    const [ readyPrediction, setReadyPrediction ] = useState<string | null>(null);
    const [ cards, setCards ] = useState<Card[]>([]); 

    const changeType = (changeTo: PredictionTypes) => {
        if (predType !== changeTo) {
            setPredType(changeTo);
        }
    };

    const makePrediction = async () => {
        setLoading(true);
        try {
            const prediction = await fetchPredict(predType, prompt);
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
        <div className="py-8 px-16 w-2/3 mx-auto mt-20 p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(139,92,246,0.15)]">
            
            <div className="text-center mb-8">
                <p className="text-3xl font-bold text-slate-800">Tarot Prediction</p>
                <div className="h-1 w-20 bg-violet-500 mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="mb-6">
                <input
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-5 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:bg-white transition-colors"
                    type="text"
                    placeholder="What exactly you want to predict?"
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                {["love", "future", "career", "impression"].map((type) => (
                    <div
                        key={type}
                        onClick={() => changeType(type as PredictionTypes)}
                        className={`
                            cursor-pointer py-3 px-4 rounded-xl text-center font-semibold transition-all duration-200
                            ${predType === type
                                ? "bg-violet-100 text-violet-700 ring-2 ring-violet-500"
                                : "bg-slate-50 text-slate-500 hover:bg-violet-50 hover:text-violet-600"
                            }
                        `}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </div>
                ))}
            </div>

            <div onClick={() => makePrediction()}>
                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-violet-200 active:scale-[0.98]">
                    Make Prediction
                </button>
            </div>

            {!loading ? <div className="p-4">
                <ul className="p-4">
                    {cards.map((card) => {
                        return(
                            <div className={`rounded-xl p-4 my-4 shadow border-2 border-gray-300 columns-2 hover:scale-115 ${card.flipped ? "bg-violet-100" : "bg-white"} transition-all`}>
                                <p className="col-1 font-bold text-violet-800 py-2">{card.name}</p>
                                <p className="text-gray-700 col-1 py-2">{card.description}</p>
                                <p className="text-violet-500 font-bold text-sm py-2">{card.flipped ? "Flipped" : "Regular"}</p>

                                <img className="h-40 col-2 mx-auto" src={mediaURLMaker(card.image_name)} alt="card image" />
                            </div>
                        )
                    })}
                </ul>

                <p className="font-bold text-gray-900">Your Prediction:</p>
                <div className="my-4">
                    {Markdown(readyPrediction ?? undefined)}
                </div>
            </div>
                :   
            <div className="flex items-center justify-center h-screen">
            <div
                className="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-violet-700 border-t-transparent"
            ></div>
            </div>
            }
        </div>
    )
};

export default MainPage;