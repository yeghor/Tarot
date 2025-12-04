import React, { useState } from "react";
import { type PredictionTypes } from "./project_types";

const MainPage = () => {
    
    const [ predType, setPredType ] = useState<PredictionTypes>("love");

    const changeType = (changeTo: PredictionTypes) => {
        if (predType !== changeTo) {
            setPredType(changeTo)
        }
    };

    const makePrediction = () => {

    };

    return(
        <div className="m-32 bg-gray-200">
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
                <div onClick={() => changeType("love")} className={`${predType == "love" ? "bg-gray-500" : "bg-gray-200"} hover:bg-red-200 transition-all`}>Love</div>
                <div onClick={() => changeType("future")} className={`${predType == "future" ? "bg-gray-500" : "bg-gray-200"} hover:bg-red-200 transition-all`}>Future</div>
                <div onClick={() => changeType("career")} className={`${predType == "career" ? "bg-gray-500" : "bg-gray-200"} hover:bg-red-200 transition-all`}>Career</div>
                <div onClick={() => changeType("impression")} className={`${predType == "impression" ? "bg-gray-500" : "bg-gray-200"} hover:bg-red-200 transition-all`}>First Impression</div>
            </div>

            <div onClick={() => makePrediction()}>
                <button className="bg-green-500 hover:bg-green-400 transition-all hover:scale-105 m-8 p-2">Make a Prediction!</button>
            </div>
        </div>
    )
};

export default MainPage;