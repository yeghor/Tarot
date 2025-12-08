from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from main_router import main_router
import upload_card_db

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(main_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "127.0.0.1:5173", "0.0.0.0:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)