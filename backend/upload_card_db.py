from project_types import TaroTypes, TaroData
import json

taro_data: TaroData = {
    "love": "Reveals emotional dynamics, intentions, hidden tensions and potential outcomes in relationships. Focuses on how two people align, what blocks them, and where the connection is heading.",
    "future": "Gives a snapshot of likely upcoming events if things continue as they are. Not fate, but a probability curve shaped by your current choices and momentum.",
    "career": "Shows work-related trends: opportunities, risks, motivation, burnout markers and how your actions might influence professional growth or stagnation.",
    "impression": "Reflects how someone currently perceives you — your energy, your strengths, your weaknesses, and the overall vibe you project in their eyes."
}
# https://www.tarot.com/tarot/cards

with open('original_data/cards_data.json', 'r') as f:
    tarot_cards = json.load(f)

# print({"TaroType": taro_data, "TaroCards": tarot_cards})