from project_types import TaroTypes, TaroData
from database.db_models import TarotCard
from database.db_connect import session_local
from database.db_service import DBService
import json
from typing import List, Dict
import uuid
from dotenv import load_dotenv
from os import getenv

load_dotenv()

"""
Run this file manualy.
1. Move to backend directory: cd backend
2. Run file using terminal: python upload_card_db.py
"""

# https://www.tarot.com/tarot/cards

# Load original JSON cards data
def get_json() -> List[Dict]:
    with open('original_data/cards_data.json', 'r') as f:
        return json.load(f)

# print({"TaroType": taro_data, "TaroCards": tarot_cards})

def reupload_cards_data_to_db() -> None:
    """Upload JSON cards data to SQLite DB"""
    
    tarot_cards = get_json()

    db_cards = [
        TarotCard(
            card_id=str(str(uuid.uuid4())),
            card_name=card["card_name"],
            img_name=card["image_name"],
            regular_desc=card["regular_desc"] if card["regular_desc"] else "",
            flipped_desc=card["flipped_desc"] if card["flipped_desc"] else ""
        ) for card in tarot_cards
    ]

    db = DBService(session_local())
    db.drop_all()
    db.insert_models(*db_cards)
    db.commit_and_close(commit=True)

if getenv("REUPLOAD_DATA") == "true":
    reupload_cards_data_to_db()