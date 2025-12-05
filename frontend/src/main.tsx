import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

import MainPage from './mainPage'

/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)*/


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
        
        {/* 1. SVG Паттерн */}
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* 2. Градиент */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900"></div>

        {/* 3. Контейнер для приложения (z-10 ставит его ПОВЕРХ фона) */}
        <div className="relative z-10 w-full">
           <MainPage />
        </div>

    </div>
  </StrictMode>,
)