from fastapi import HTTPException
import google.generativeai as genai
from abc import ABC, abstractmethod
from dotenv import load_dotenv
from os import getenv
from typing import List

load_dotenv()

from project_types import TaroTypes, TaroData
from pydantic_models import Card

BASE_PROMPT = """
You are an expert tarot reader. Give a clear, direct, practical prediction without being vague or overly mystical.

Task:
- Combine the meanings of all three cards into a coherent, realistic prediction.
- Use the context of the user’s question.
- Stay grounded: no fate, destiny, or supernatural claims.
- Focus on psychology, patterns, likely outcomes, and actionable insights.
- Keep the reading structured:
  1. What the cards reveal about the current situation.
  2. The dynamics, challenges, or influences.
  3. The most likely outcome if nothing changes.
  4. Practical advice the user can apply.

Tone:
- Calm, thoughtful, analytical.
- Don’t sugarcoat. Be honest and practical.
- Avoid generic sayings or clichés.
"""

taro_data: TaroData = {
    "love": {
        "k": 5,
        "description": "Reveals emotional dynamics, intentions, hidden tensions and potential outcomes in relationships. Focuses on how two people align, what blocks them, and where the connection is heading."
    },
    "future": {
        "k": 5,
        "description": "Gives a snapshot of likely upcoming events if things continue as they are. Not fate, but a probability curve shaped by your current choices and momentum."
    },
    "career": {
        "k": 5,
        "description": "Shows work-related trends: opportunities, risks, motivation, burnout markers and how your actions might influence professional growth or stagnation."
    },
    "impression": {
        "k": 1,
        "description": "Reflects how someone currently perceives you — your energy, your strengths, your weaknesses, and the overall vibe you project in their eyes."
    }
}

genai.configure(api_key=getenv("GOOGLE_API_KEY"))

class AIServiceABC(ABC):
    @staticmethod
    def _create_full_prompt(predict_type: TaroTypes, user_prompt: str, cards: List[Card]) -> str:
        """Constructs full prompt to AI"""

        cards_desc = f"CARDS:\n"
        for card in cards:
            cards_desc += f"{card.name} - {card.description}\n"
    
        user_prompt_ready = f"USER PROMPT: {user_prompt}"

        predict_type = f"PREDICTION TYPE: {predict_type} - {taro_data[predict_type]["description"]}"

        return f"{BASE_PROMPT} \n\n {predict_type} \n {cards_desc} \n {user_prompt_ready}"


    @abstractmethod
    def make_prediction(self, predict_type: TaroTypes, prompt: str, cards: List[Card]) -> str:
        """Makes request to AI API to get description of prediction"""

class GeminiService(AIServiceABC):
    def __init__(self):
        # The client gets the API key from the environment variable `GEMINI_API_KEY`.
        self._client = genai.GenerativeModel(model_name="gemini-2.5-flash")

    def make_prediction(self, predict_type, prompt, cards):
        prepared_prompt = self._create_full_prompt(predict_type, prompt, cards)
        # try:
        print(prepared_prompt)
        response = self._client.generate_content(contents=prepared_prompt)

        return response.text
        # except Exception:
        #     raise HTTPException(status_code=500, detail="AI Client doesn't respond")
