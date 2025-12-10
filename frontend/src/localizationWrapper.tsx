import React, { useState, useEffect, type ReactNode, createContext } from "react";

import { localization, type LocalizationOptions, type MappedLocalization } from "./localization/localization";
import { mapLocalization } from "./localization/localizationMapper";

interface LocalizationProps {
    children: ReactNode;
}

export type LanguageStateSwitcherType = React.Dispatch<React.SetStateAction<LocalizationOptions>>;

export const LocalizationContext = createContext<[MappedLocalization, LocalizationOptions] | null>(null);
export const LanguageSwitcherStateContext = createContext<LanguageStateSwitcherType | null>(null);

const LocalizationWrapper = (props: LocalizationProps) => {
    const [ localizationState, setLocalizationState ] = useState<LocalizationOptions>(localization);
    const [ MappedLocalizationState, setMappedLocalizationState ] = useState<MappedLocalization>(mapLocalization(localizationState));

    useEffect(() => {
        setMappedLocalizationState(mapLocalization(localizationState));
        console.log("Changed localization, now: " + localizationState);
    }, [localizationState])

    return(
        <LocalizationContext.Provider value={[MappedLocalizationState, localizationState]}>
            <LanguageSwitcherStateContext.Provider value={setLocalizationState}>
                {props.children}
            </LanguageSwitcherStateContext.Provider>
        </LocalizationContext.Provider>
    );
};

export default LocalizationWrapper;