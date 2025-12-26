export type LocalizationOptions = "ENG" | "UA"
export let localization: LocalizationOptions = "UA" // TODO: Store in Cookies

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
    mainFooterSubscriptionLinks: string
    mainFooterSubscriptionText: string
    mainFooterSubscriptionPlaceholder: string
    mainFooterSubscriptionButton: string
    mainFooterCopyright: string
    mainFooterCopyrightCookies: string
    mainAboutUsTitle: string
    mainAboutUsText: string
    mainAboutUsMissionTitle: string
    mainAboutUsMissionText: string
    mainAboutUsContactButton: string
    mainAboutUsContactText: string
    mainAboutUsMissionButton1: string
    mainAboutUsMissionButton2: string
    mainAboutUsMissionButton3: string
    mainAboutUsMissionButton4: string
    mainCardsTitle: string
    mainCardsText: string
    mainCardsUpright: string
    mainCardsReversed: string
}

export const localizationObj = {
    predictionTitle: {
        ENG: "Tarot Predict",
        UA: "Таро Передбачення"
    },
    mainInputPlaceHolder: {
        ENG: "What exactly you want to predict?",
        UA: "Що саме ви хотіли б передбачити?"
    },
    mainButtonTitle: {
        ENG: ["love", "future", "career", "impression"],
        UA: ["кохання", "майбутнє", "кар'єра", "враження"]
    },
    predictionButtonTitle: {
        ENG: "Make Prediction",
        UA: "Подивитися передбачення"
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
        ENG: 'Subscription',
        UA: 'Підписка'
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
        UA: "Cookies (печінки’)"
    },

    mainAboutUsTitle: {
        ENG: "About Us",
        UA: "Про нас"
    },
    mainAboutUsText: {
        ENG: "Welcome to our prediction platform. We combine the ancient traditions of Tarot with modern artificial intelligence technologies to provide you with the most accurate and personalized answers to your pressing questions.",
        UA: "Ласкаво просимо на нашу платформу передбачень. Ми поєднуємо давні традиції Таро та сучасні технології штучного інтелекту, щоб надати вам найточніші та персоналізовані відповіді на хвилюючі питання."
    }, 
    mainAboutUsMissionTitle: {
        ENG: "Our Mission",
        UA: "Наша місія"
    },
    mainAboutUsMissionText: {
        ENG: "To help every individual find clarity in complex life situations by providing an accessible tool for self-analysis and inspiration.",
        UA: "Допомогти кожній людині знайти ясність у складних життєвих ситуаціях, надаючи доступний інструмент для самоаналізу та натхнення"
    },
    mainAboutUsContactButton: {
        ENG: "Contact Us",
        UA: "Зв'язатися з нами"
    },
    mainAboutUsContactText: {
        ENG: "If you have any questions or suggestions, you can always contact us. We are constantly working to improve the quality of our predictions.",
        UA: "Якщо у вас є питання або пропозиції, ви завжди можете зв’язатися з нами. Ми постійно працюємо над покращенням якості наших прогнозів."
    }, 

    mainAboutUsMissionButton1:{
        ENG: "Accurate Predictions",
        UA: "Точні передбачення"
    },
    mainAboutUsMissionButton2:{ 
        ENG: "Availability",
        UA: "Доступність"
    },
    mainAboutUsMissionButton3:{
        ENG: "Anonymity",
        UA: "Анонімність"
    },
    mainAboutUsMissionButton4:{
        ENG: "Satisfied Clients",
        UA: "Довольні кліенти"
    },
    mainCardsTitle: {
        ENG: "Card Gallery",
        UA: "Галерея карт"
    },
    mainCardsText: {
        ENG: "Explore the meanings of each Tarot card in our deck gallery.",
        UA: "Дізнайтеся більше про значення кожної карти Таро в нашій галереї колоди."
    },
    mainCardsUpright: {
        ENG: "Upright",
        UA: "Значення"
    },
    mainCardsReversed: {
        ENG: "Reversed",
        UA: "Перевернуте"
    },
}
