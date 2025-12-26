import Reac, { useContext } from 'react';
import { LocalizationContext } from '../localization/localizationWrapper';
import { mapLocalization } from '../localization/localizationMapper';

const AboutUs = () => {
    let localization = useContext(LocalizationContext);
    if(!localization) {
        localization = [mapLocalization("ENG"), "ENG"]
    }

    const localizationData = localization[0];

     return(
          <div className="py-8 px-16 w-2/3 mx-auto mt-20 p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(139,92,246,0.15)]">
            
            <div className="text-center mb-8">
                <p className="text-3xl font-bold text-slate-800">Про нас</p>
                <div className="h-1 w-20 bg-violet-500 mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed">
                
                <p>
                    Ласкаво просимо на нашу платформу передбачень. 
                    Ми поєднуємо давні традиції Таро та сучасні технології штучного інтелекту, 
                    щоб надати вам найточніші та персоналізовані відповіді на хвилюючі питання.
                </p>

                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-violet-300 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-violet-700 mb-3">Наша місія</h3>
                    <p className="text-slate-600">
                        Допомогти кожній людині знайти ясність у складних життєвих ситуаціях, 
                        надаючи доступний інструмент для самоаналізу та натхнення
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-violet-50 p-4 rounded-xl text-center border border-violet-100">
                        <span className="block text-2xl font-bold text-violet-600 mb-1">AI</span>
                        <span className="text-sm font-semibold text-slate-600">Точні передбачення</span>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-xl text-center border border-violet-100">
                        <span className="block text-2xl font-bold text-violet-600 mb-1">24/7</span>
                        <span className="text-sm font-semibold text-slate-600">Доступність</span>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-xl text-center border border-violet-100">
                        <span className="block text-2xl font-bold text-violet-600 mb-1">100%</span>
                        <span className="text-sm font-semibold text-slate-600">Анонімність</span>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-xl text-center border border-violet-100">
                        <span className="block text-2xl font-bold text-violet-600 mb-1">9/10</span>
                        <span className="text-sm font-semibold text-slate-600">Довольні кліенти</span>
                    </div>
                </div>

                <p className="mt-4">
                    Якщо у вас є питання або пропозиції, ви завжди можете зв’язатися з нами. 
                    Ми постійно працюємо над покращенням якості наших прогнозів.
                </p>

                <div className="mt-8">
                    <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-violet-200 active:scale-[0.98]">
                        Зв'язатися з нами
                    </button>
                </div>
            </div>
        </div>
     )
}

export default AboutUs;