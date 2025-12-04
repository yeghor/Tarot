<<<<<<< HEAD
from abc import ABC, abstractmethod

from backend.types import TaroTypes

class AIService(ABC):
    @abstractmethod
    def get_prediction_desc(predict_type: TaroTypes, prompt: str, cards) -> str:
        """Makes request to AI API to get description of prediction"""

class GeminiService(AIService):
    def get_prediction_desc(predict_type, prompt, cards):
        pass
=======
class GeminiService: # прописать какие-то методы 
    pass
>>>>>>> f1cbb1c1014ac9d2e660c3f65ebb29167d8144fc
