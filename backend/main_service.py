from sqlalchemy.orm import Session

from project_types import TaroTypes
from gemini_service import taro_data
from gemini_service import AIServiceABC, GeminiService
from database.db_service import DBServiceABC, DBService
from pydantic_models import PredictionResponse, CardExtended
import random
from typing import List
from database.db_models import TarotCard

class MainService:
    def __init__(self, session: Session, predict_type: TaroTypes, prompt: str, AIServiceClass: AIServiceABC = GeminiService, DBServiceClass: DBServiceABC = DBService):
        """Call close when you finish your work to respectfuly close db session"""

        self._AIService: AIServiceABC = AIServiceClass()
        self._DBService: DBServiceABC = DBServiceClass(session)

        self.predict_type = predict_type
        self.prompt = prompt

    def predict(self) -> PredictionResponse:
        db_cards: List[TarotCard] = self._DBService.get_cards()
        cards = random.choices(db_cards, k=taro_data[self.predict_type]["k"])

        parced_cards = [CardExtended(name=card.card_name, image_name=card.img_name, description=card.regular_desc if random.choice([False, True]) else card.flipped_desc) for card in cards]

        prediction = self._AIService.make_prediction(predict_type=self.predict_type, prompt=self.prompt, cards=parced_cards)

        return PredictionResponse(prediction=prediction, cards=parced_cards)

    def close(self, error: bool) -> str:
        self._DBService.commit_and_close(not error)