import type { LocalizationOptions } from "../localization/localization";
import type { PredictionTypes } from "../project_types"

const BASE_URL = `http://localhost:8000`;

export const MEDIA_URL = (image_name: string) => {
    return `http://localhost:8000/static/media/${image_name}`
};

export interface Card {
    name: string;
    description: string;
    image_name: string;
    flipped: boolean;
}

export interface PredictResponse {
    prediction: string;
    cards: Card[];
}

export const fetchPredict = async (predictType: PredictionTypes, prompt: string, language: LocalizationOptions): Promise<PredictResponse | null> => {
    try {
        const URL = `${BASE_URL}/predict/${predictType}/${language}/?prompt=${prompt}`;
        const response = await fetch(URL);

        if (response.ok) {
            return response.json()
        }
    } catch (err) {
        console.error(err)
        window.alert("Error while fetchin to API");
    }
    return null;
};