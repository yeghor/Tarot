export type LocalizationOptions = "ENG" | "UA"
export let localization: LocalizationOptions = "ENG" // TODO: Store in Cookies

export interface MappedLocalization {
    predictionTitle: string
    mainInputPlaceHolder: string
    mainButtonTitle: string[]
    predictionButtonTitle: string
    predictionTitleMessage: string
    mainNavbarTitle: string[]
    mainFooterText: string
    mainFooterCompanyText: string
    mainFooterCompanyLinks: string[]
    mainFooterSupportText: string
    mainFooterSupportLinks: string[]
    mainFooterSubscriptionLinks: string[]
    mainFooterSubscriptionText: string
    mainFooterSubscriptionPlaceholder: string
    mainFooterSubscriptionButton: string
    mainFooterCopyright: string
}

export const localizationObj = {
    predictionTitle: {
        ENG: "Prediction",
        UA: "Передбачення"
    },
    mainInputPlaceHolder: {
        ENG: "What exactly you want to predict?",
        UA: "Що саме ви хотіли б передбачити?"
    },
    mainButtonTitle: {
        ENG: ["love", "future", "career", "impression"],
        UA: ["love", "future", "career", "impression"]
    },
    predictionButtonTitle: {
        ENG: "Make Prediction",
        UA: "Зробити передбачення"
    }, 
    predictionTitleMessage: {
        ENG: "Your Prediction:",
        UA: "Ваше передбачення:"
    },
    mainNavbarTitle: {
        ENG: ['Home', 'All Cards', 'About us', 'GitHub'],
        UA: ['Головна', 'Всі карти', 'Про нас', 'GitHub']
    },
    mainFooterText: {
        ENG: "We help you become aware of your future. Join us on this journey of self-discovery and uncover the secrets that lie ahead.",
        UA: "Ми допомагаємо вам усвідомити ваше майбутнє. Приєднуйтесь до нас у цій подорожі самопізнання та розкрийте секрети, що лежать попереду."
    },
    mainFooterCompanyText: {
        ENG: "Company",
        UA: "Компанія"
    },
    mainFooterCompanyLinks: {
        ENG: ['About us'],
        UA: ['Про нас']
    },
    mainFooterSupportText: {
        ENG: "Support",
        UA: "Підтримка"
    },
    mainFooterSupportLinks: {
        ENG: ['Report a problem', 'Contacts'],
        UA: ['Повідомити про проблему', 'Контакти']
    },
    mainFooterSubscriptionLinks: {
        ENG: ['Subscription'],
        UA: ['Підписка']
    },
    mainFooterSubscriptionText: {
        ENG: "Stay up to date with the latest news and updates.",
        UA: "Будьте в курсі останніх новин та оновлень."
    },
    mainFooterSubscriptionPlaceholder: {
        ENG: "Your email",
        UA: "Ваш email"
    },
    mainFooterSubscriptionButton: {
        ENG: "Subscribe",
        UA: "Підписатися"
    },
    mainFooterCopyright: {
        ENG: "Tarot. All rights reserved.",
        UA: "Tarot. Всі права захищені."
    },
    mainFooterCopyrightCookies: {
        ENG: "Cookies",
        UA: "Cookies (печінки)"
    }
}
