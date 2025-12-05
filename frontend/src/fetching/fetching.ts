import type { PredictionTypes } from "../project_types"

const BASE_URL = `http://localhost:8000`;

export const fetchPredict = async (predictType: PredictionTypes, prompt: string): Promise<string | null> => {
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