import { useState } from "react";

import { type PredictionTypes } from "./project_types";
import { fetchPredict } from "./fetching/fetching";
import './index.css'; 

import { type Card } from "./fetching/fetching";
import Markdown from "./mardown";

const MainPage = () => {
    
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
        const prediction = await fetchPredict(predType, prompt);
        if (prediction) {
            setReadyPrediction(prediction.prediction);
            setCards(prediction.cards);
        } else {
            setReadyPrediction("Failed to get prediction");
        }
    };

    return(
<div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(139,92,246,0.15)]">
    
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
            Reveal Destiny
        </button>
    </div>

    <ul className="p-4">
        {cards.map((card) => {
            return(
                <div>
                    <p className="underline">{card.name}</p>
                    <p className="text-gray-700">{card.description}</p>
                </div>
            )
        })}
    </ul>
    <div className="p-4">
        {Markdown(readyPrediction ?? undefined)}
    </div>
    
</div>

    )
};

export default MainPage;

        /*
        <div className="m-32 bg-violet-200 p-8 rounded-3xl">
            <div>
                <p className="text-3xl">Make Tarot Prediction</p>               
            </div>

            <div className="border-1 border-gray-200 w-full m-4 rounded-full p-2 transition-all focus:border-2">
                <input
                    className="w-full"
                    type="text"
                    placeholder="What exact you want to predic?"
                /> 
            </div>

            <div className="columns-2">
                <div onClick={() => changeType("love")} className={`${predType == "love" ? "bg-violet-500" : "bg-violet-300"} hover:bg-rose-200 transition-all`}>Love</div>
                <div onClick={() => changeType("future")} className={`${predType == "future" ? "bg-violet-500" : "bg-violet-300"} hover:bg-rose-200 transition-all`}>Future</div>
                <div onClick={() => changeType("career")} className={`${predType == "career" ? "bg-violet-500" : "bg-violet-300"} hover:bg-rose-200 transition-all`}>Career</div>
                <div onClick={() => changeType("impression")} className={`${predType == "impression" ? "bg-violet-500" : "bg-violet-300"} hover:bg-rose-200 transition-all`}>First Impression</div>
            </div>

            <div onClick={() => makePrediction()}>
                <button className="bg-violet-500 hover:bg-violet-300 transition-all hover:scale-105 m-8 p-2">Make a Prediction!</button>
            </div>
        </div>
        */