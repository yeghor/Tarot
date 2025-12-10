export let localization: "ENG" | "UK" = "ENG" 

export interface MappedLocalization {
    predictionButtonTitle: string
    mainInputPlaceHolder: string
}

export const localizationObj = {
    predictionButtonTitle: {
        ENG: "Predict",
        UA: "Передбачення"
    },
    mainInputPlaceHolder: {
        ENG: "What exactly you want to predict?",
        UA: "Що саме ви хотіли б передбачити?"
    }
}
