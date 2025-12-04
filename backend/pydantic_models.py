from pydantic import BaseModel
from datetime import datetime
from typing import List, Any 

#сделать тип для карточки (название, описание)
# DTOs

class Card(BaseModel):
    name: str
    descriprion: str 

class CardExtended(Card):
    image_name: str

class PredictionResponse(BaseModel):
    prediction: str 
    cards: List[CardExtended]
    image_name: str 

