from pydantic import BaseModel
from datetime import datetime
from typing import List, Any 

#сделать тип для карточки (название, описание)
# DTOs
<<<<<<< HEAD

class Card(BaseModel):
    name: str
    descriprion: str 

class CardExtended(Card):
    image_name: str

class PredictionResponse(BaseModel):
    prediction: str 
    cards: List[CardExtended]
    image_name: str 

=======
class Schema:
    pass
>>>>>>> c8bad3ac930c8886d7b7f5b50dd123ac32225848
