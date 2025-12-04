from pydantic import BaseModel
from datetime import datetime
from typing import List, Any 

#сделать тип для карточки (название, описание)
# DTOs
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f1cbb1c1014ac9d2e660c3f65ebb29167d8144fc

class Card(BaseModel):
    name: str
    descriprion: str 

class CardExtended(Card):
    image_name: str

class PredictionResponse(BaseModel):
    prediction: str 
    cards: List[CardExtended]
    image_name: str 

<<<<<<< HEAD
=======
=======
class Schema:
    pass
>>>>>>> c8bad3ac930c8886d7b7f5b50dd123ac32225848
>>>>>>> f1cbb1c1014ac9d2e660c3f65ebb29167d8144fc
