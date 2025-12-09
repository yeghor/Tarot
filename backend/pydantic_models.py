from pydantic import BaseModel
from typing import List


class Card(BaseModel):
    name: str
    description: str 

class CardExtended(Card):
    image_name: str
    flipped: bool

class PredictionResponse(BaseModel):
    prediction: str 
    cards: List[CardExtended] 
