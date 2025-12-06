# Tarot
Tarot prediction web application.

## How it works?

On the frontend user chooses prediction type and enters prompt. When user clicks submit button, backend receives request, chooses random tarot cards and making request to AI API to generate prediction based on the type, user's prompt and tarot cards.

## Stack

**Frontend** *(TypeScript)*:
- React
- TailwindCSS

**Backend** *(Python)*:
- fastAPI
- Pydantic
- SQLalcemy
- google.genai

## Usage

> Requires Python 3.12+, npm or yarn

Clone the repository:
```bash
git clone https://github.com/yeghor/Tarot.git
```

Create `.env` file in `backend` directory and fill it with your **Gemini API Key**:
```
GOOGLE_API_KEY="YOUR-SUPER-SECRET-API-KEY"
```

Install dependencies:
```bash
cd backend
pip install -r requirements.txt
cd ..

cd frontend
npm i # or yarn install
```

Run backend and frontend:
```bash
cd backend
uvicorn main:app --reload
```

```bash
cd frontend
npm run dev
```
