from abc import ABC, abstractmethod

from backend.types import TaroTypes

class AIService(ABC):
    @abstractmethod
    def get_prediction_desc(predict_type: TaroTypes, prompt: str, cards) -> str:
        """Makes request to AI API to get description of prediction"""

class GeminiService(AIService):
    def get_prediction_desc(predict_type, prompt, cards):
        pass
