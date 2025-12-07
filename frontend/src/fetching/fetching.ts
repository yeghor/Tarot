import type { PredictionTypes } from "../project_types"

const BASE_URL = `http://localhost:8000`;

export interface Card {
    name: string;
    description: string;
    image_name: string;
}

export interface PredictResponse {
    prediction: string;
    cards: Card[];
}

export const fetchPredict = async (predictType: PredictionTypes, prompt: string): Promise<PredictResponse | null> => {
    try {
        const URL = `${BASE_URL}/predict/${predictType}?prompt=${prompt}`;
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