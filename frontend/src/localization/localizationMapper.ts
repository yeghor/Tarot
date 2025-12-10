import { type MappedLocalization, localizationObj } from "./localization"

type Language = "ENG" | "UA"

export const mapLocalization = (lang: Language): MappedLocalization => {
    if (lang == "ENG") {
        return {
            predictionTitle: localizationObj.predictionTitle.ENG,
            mainInputPlaceHolder: localizationObj.mainInputPlaceHolder.ENG,
            mainButtonTitle: localizationObj.mainButtonTitle.ENG,
            predictionButtonTitle: localizationObj.predictionButtonTitle.ENG,
            predictionTitleMessage: localizationObj.predictionTitleMessage.ENG,
            mainNavbarTitle: localizationObj.mainNavbarTitle.ENG,
            mainFooterText: localizationObj.mainFooterText.ENG,
            mainFooterCompanyText: localizationObj.mainFooterCompanyText.ENG,
            mainFooterCompanyLinks: localizationObj.mainFooterCompanyLinks.ENG,
            mainFooterSupportText: localizationObj.mainFooterSupportText.ENG,
            mainFooterSupportLinks: localizationObj.mainFooterSupportLinks.ENG,
            mainFooterSubscriptionLinks: localizationObj.mainFooterSubscriptionLinks.ENG,
            mainFooterSubscriptionText: localizationObj.mainFooterSubscriptionText.ENG,
            mainFooterSubscriptionPlaceholder: localizationObj.mainFooterSubscriptionPlaceholder.ENG,
            mainFooterSubscriptionButton: localizationObj.mainFooterSubscriptionButton.ENG,
            mainFooterCopyright: localizationObj.mainFooterCopyright.ENG
        } 
    }else{
        return {
            predictionTitle: localizationObj.predictionTitle.UA,
            mainInputPlaceHolder: localizationObj.mainInputPlaceHolder.UA,
            mainButtonTitle: localizationObj.mainButtonTitle.UA,
            predictionButtonTitle: localizationObj.predictionButtonTitle.UA,
            predictionTitleMessage: localizationObj.predictionTitleMessage.UA,
            mainNavbarTitle: localizationObj.mainNavbarTitle.UA,
            mainFooterText: localizationObj.mainFooterText.UA,
            mainFooterCompanyText: localizationObj.mainFooterCompanyText.UA,
            mainFooterCompanyLinks: localizationObj.mainFooterCompanyLinks.UA,
            mainFooterSupportText: localizationObj.mainFooterSupportText.UA,
            mainFooterSupportLinks: localizationObj.mainFooterSupportLinks.UA,
            mainFooterSubscriptionLinks: localizationObj.mainFooterSubscriptionLinks.UA,
            mainFooterSubscriptionText: localizationObj.mainFooterSubscriptionText.UA,
            mainFooterSubscriptionPlaceholder: localizationObj.mainFooterSubscriptionPlaceholder.UA,
            mainFooterSubscriptionButton: localizationObj.mainFooterSubscriptionButton.UA,
            mainFooterCopyright: localizationObj.mainFooterCopyright.UA
        }
    }
}