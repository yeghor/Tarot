from backend.types import TaroType, TaroData

taro_data: TaroData = {
    "love": "Reveals emotional dynamics, intentions, hidden tensions and potential outcomes in relationships. Focuses on how two people align, what blocks them, and where the connection is heading.",
    "future": "Gives a snapshot of likely upcoming events if things continue as they are. Not fate, but a probability curve shaped by your current choices and momentum.",
    "career": "Shows work-related trends: opportunities, risks, motivation, burnout markers and how your actions might influence professional growth or stagnation.",
    "impression": "Reflects how someone currently perceives you — your energy, your strengths, your weaknesses, and the overall vibe you project in their eyes."
}
# https://www.tarot.com/tarot/cards
# D:\Prg\image
cards = [
    # D:\Prg\image\Major Arcana
    {
        "card_name": "the_fool",
        "regular_desc": "New beginnings, innocence, spontaneity, and a free spirit.",
        "flipped_desc": "Recklessness, risk-taking, bad decisions, and naivety."
    },
    {
        "card_name": "the_magician",
        "regular_desc": "Manifestation, resourcefulness, power, and inspired action.",
        "flipped_desc": "Manipulation, poor planning, untapped talents, and illusion."
    },
    {
        "card_name": "the_high_priestess",
        "regular_desc": "Intuition, sacred knowledge, divine feminine, and the subconscious mind.",
        "flipped_desc": "Secrets, disconnected from intuition, withdrawal, and silence."
    },
    {
        "card_name": "the_empress",
        "regular_desc": "Femininity, beauty, nature, nurturing, and abundance.",
        "flipped_desc": "Creative block, dependence on others, and emptiness."
    },
    {
        "card_name": "the_emperor",
        "regular_desc": "Authority, establishment, structure, and a father figure.",
        "flipped_desc": "Domination, excessive control, lack of discipline, and inflexibility."
    },
    {
        "card_name": "the_hierophant",
        "regular_desc": "Spiritual wisdom, religious beliefs, conformity, and tradition.",
        "flipped_desc": "Personal beliefs, freedom, challenging the status quo, and rebellion."
    },
    {
        "card_name": "the_lovers",
        "regular_desc": "Love, harmony, relationships, values alignment, and choices.",
        "flipped_desc": "Self-love, disharmony, imbalance, and misalignment of values."
    },
    {
        "card_name": "the_chariot",
        "regular_desc": "Control, willpower, success, action, and determination.",
        "flipped_desc": "Self-discipline, opposition, lack of direction, and aggression."
    },
    {
        "card_name": "strength",
        "regular_desc": "Strength, courage, persuasion, influence, and compassion.",
        "flipped_desc": "Inner strength, self-doubt, low energy, and raw emotion."
    },
    {
        "card_name": "the_hermit",
        "regular_desc": "Soul-searching, introspection, being alone, and inner guidance.",
        "flipped_desc": "Isolation, loneliness, withdrawal, and rejection."
    },
    {
        "card_name": "wheel_of_fortune",
        "regular_desc": "Good luck, karma, life cycles, destiny, and a turning point.",
        "flipped_desc": "Bad luck, resistance to change, and breaking cycles."
    },
    {
        "card_name": "justice",
        "regular_desc": "Justice, fairness, truth, cause and effect, and law.",
        "flipped_desc": "Unfairness, lack of accountability, and dishonesty."
    },
    {
        "card_name": "the_hanged_man",
        "regular_desc": "Pause, surrender, letting go, and new perspectives.",
        "flipped_desc": "Delays, resistance, stalling, and indecision."
    },
    {
        "card_name": "death",
        "regular_desc": "Endings, change, transformation, and transition.",
        "flipped_desc": "Resistance to change, personal transformation, and inability to move on."
    },
    {
        "card_name": "temperance",
        "regular_desc": "Balance, moderation, patience, purpose, and meaning.",
        "flipped_desc": "Imbalance, excess, self-healing, and re-alignment."
    },
    {
        "card_name": "devil",
        "regular_desc": "Shadow self, attachment, addiction, restriction, and sexuality.",
        "flipped_desc": "Releasing limiting beliefs, exploring dark thoughts, and detachment."
    },
    {
        "card_name": "the_tower",
        "regular_desc": "Sudden change, upheaval, chaos, revelation, and awakening.",
        "flipped_desc": "Personal transformation, fear of change, and averting disaster."
    },
    {
        "card_name": "the_star",
        "regular_desc": "Hope, faith, purpose, renewal, and spirituality.",
        "flipped_desc": "Lack of faith, despair, self-trust, and disconnection."
    },
    {
        "card_name": "the_moon",
        "regular_desc": "Illusion, fear, anxiety, subconscious, and intuition.",
        "flipped_desc": "Release of fear, repressed emotion, and inner confusion."
    },
    {
        "card_name": "the_sun",
        "regular_desc": "Positivity, fun, warmth, success, vitality, and celebration.",
        "flipped_desc": "Inner child, feeling down, overly optimistic, and unrealistic expectations."
    },
    {
        "card_name": "judgement",
        "regular_desc": "Judgement, rebirth, inner calling, and absolution.",
        "flipped_desc": "Self-doubt, inner critic, and ignoring the call."
    },
    {
        "card_name": "the_world",
        "regular_desc": "Completion, integration, accomplishment, and travel.",
        "flipped_desc": "Seeking personal closure, short-cuts, and delays."
    }

    # D:\Prg\image\the_wands

    {
        "card_name": "ace_of_wands",
        "regular_desc": "Inspiration, new opportunities, growth, and potential.",
        "flipped_desc": "Delays, lack of motivation, creative blocks, and missed opportunities."
    },
    {
        "card_name": "two_of_wands",
        "regular_desc": "Future planning, progress, decisions, and discovery.",
        "flipped_desc": "Fear of unknown, lack of planning, and playing it safe."
    },
    {
        "card_name": "three_of_wands",
        "regular_desc": "Expansion, foresight, overseas opportunities, and progress.",
        "flipped_desc": "Obstacles, delays, frustration, and holding onto the past."
    },
    {
        "card_name": "four_of_wands",
        "regular_desc": "Celebration, joy, harmony, relaxation, and homecoming.",
        "flipped_desc": "Conflict, tension, instability, and lack of support."
    },
    {
        "card_name": "five_of_wands",
        "regular_desc": "Conflict, disagreements, competition, and tension.",
        "flipped_desc": "Conflict avoidance, respecting differences, and finding peace."
    },
    {
        "card_name": "six_of_wands",
        "regular_desc": "Success, public recognition, progress, and self-confidence.",
        "flipped_desc": "Ego, fall from grace, lack of recognition, and private achievement."
    },
    {
        "card_name": "seven_of_wands",
        "regular_desc": "Challenge, competition, protection, and perseverance.",
        "flipped_desc": "Giving up, being overwhelmed, and loss of confidence."
    },
    {
        "card_name": "eight_of_wands",
        "regular_desc": "Movement, fast paced change, action, and alignment.",
        "flipped_desc": "Delays, frustration, resisting change, and internal alignment."
    },
    {
        "card_name": "nine_of_wands",
        "regular_desc": "Resilience, courage, persistence, and test of faith.",
        "flipped_desc": "Exhaustion, fatigue, questioning commitment, and paranoia."
    },
    {
        "card_name": "ten_of_wands",
        "regular_desc": "Burden, extra responsibility, hard work, and completion.",
        "flipped_desc": "Doing it all, carrying the burden, and collapse from exhaustion."
    },
    {
        "card_name": "page_of_wands",
        "regular_desc": "Inspiration, ideas, discovery, and limitless potential.",
        "flipped_desc": "Newly found ideas, redirecting energy, and self-limiting beliefs."
    },
    {
        "card_name": "knight_of_wands",
        "regular_desc": "Energy, passion, inspired action, and adventure.",
        "flipped_desc": "Passion project, haste, scattered energy, and delays."
    },
    {
        "card_name": "queen_of_wands",
        "regular_desc": "Courage, confidence, independence, and determination.",
        "flipped_desc": "Self-respect, self-confidence, introverted charisma, and jealousy."
    },
    {
        "card_name": "king_of_wands",
        "regular_desc": "Natural-born leader, vision, entrepreneur, and honor.",
        "flipped_desc": "Impulsiveness, haste, ruthless, and high expectations."
    },
    {
        "card_name": "ace_of_cups",
        "regular_desc": "Love, new relationships, compassion, and creativity.",
        "flipped_desc": "Self-love, intuition, repressed emotions, and blocked creativity."
    },
    {
        "card_name": "two_of_cups",
        "regular_desc": "Unified love, partnership, mutual attraction, and connection.",
        "flipped_desc": "Self-love, break-ups, disharmony, and imbalance."
    },
    {
        "card_name": "three_of_cups",
        "regular_desc": "Celebration, friendship, creativity, and collaborations.",
        "flipped_desc": "Independence, alone time, hardcore partying, and stifled creativity."
    },
    {
        "card_name": "four_of_cups",
        "regular_desc": "Meditation, contemplation, apathy, and re-evaluation.",
        "flipped_desc": "Retreat, withdrawal, checking in for alignment, and awareness."
    },
    {
        "card_name": "five_of_cups",
        "regular_desc": "Regret, failure, disappointment, and pessimism.",
        "flipped_desc": "Personal setbacks, self-forgiveness, and moving on."
    },
    {
        "card_name": "six_of_cups",
        "regular_desc": "Revisiting the past, childhood memories, innocence, and joy.",
        "flipped_desc": "Living in the past, forgiveness, and lacking playfulness."
    },
    {
        "card_name": "seven_of_cups",
        "regular_desc": "Opportunities, choices, wishful thinking, and illusion.",
        "flipped_desc": "Alignment, personal values, overwhelmed by choices, and clarity."
    },
    {
        "card_name": "eight_of_cups",
        "regular_desc": "Disappointment, abandonment, withdrawal, and escapism.",
        "flipped_desc": "Trying one more time, indecision, aimless drifting, and walking away."
    },
    {
        "card_name": "nine_of_cups",
        "regular_desc": "Contentment, satisfaction, gratitude, and wish come true.",
        "flipped_desc": "Inner happiness, materialism, dissatisfaction, and indulgence."
    },
    {
        "card_name": "ten_of_cups",
        "regular_desc": "Divine love, blissful relationships, harmony, and alignment.",
        "flipped_desc": "Disconnection, misaligned values, struggling relationships, and broken home."
    },
    {
        "card_name": "page_of_cups",
        "regular_desc": "Creative opportunities, intuitive messages, and curiosity.",
        "flipped_desc": "New ideas, doubting intuition, creative blocks, and emotional immaturity."
    },
    {
        "card_name": "knight_of_cups",
        "regular_desc": "Creativity, romance, charm, imagination, and beauty.",
        "flipped_desc": "Overactive imagination, unrealistic, jealous, and moody."
    },
    {
        "card_name": "queen_of_cups",
        "regular_desc": "Compassionate, caring, emotionally stable, and intuitive.",
        "flipped_desc": "Inner feelings, self-care, self-love, and co-dependency."
    },
    {
        "card_name": "king_of_cups",
        "regular_desc": "Emotionally balanced, compassionate, and diplomatic.",
        "flipped_desc": "Self-compassion, inner feelings, moodiness, and manipulation."
    }

    # D:\Prg\image\the_swords

    {
        "card_name": 'ace_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'two_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'three_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'four_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'five_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'six_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'seven_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'eight_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'nine_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'ten_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'page_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'knight_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'queen_of_swords',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'king_of_swords',
        "card_description": str,
        "image_name": str
    },

    # D:\Prg\image\the_pentacles

   {
        "card_name": 'ace_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'two_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'three_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'four_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'five_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'six_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'seven_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'eight_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'nine_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'ten_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'page_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'knight_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'queen_of_coins',
        "card_description": str,
        "image_name": str
    },
    {
        "card_name": 'king_of_coins',
        "card_description": str,
        "image_name": str
    }
]