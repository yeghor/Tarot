from backend.types import TaroTypes
from TaroMLP.backend.upload_card_db import taro_data
from backend.gemini_service import AIService, GeminiService

class MainService:
    def __init__(self, predict_type: TaroTypes, prompt: str, AIServiceClass: AIService):
        self.AIService: AIService = AIServiceClass()

        self.predictType = predict_type
        self.prompt = prompt

    def predict(self):
        pass