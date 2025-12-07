from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends
from main_service import MainService

from database.db_connect import get_sesstion_depends
from pydantic_models import PredictionResponse

main_router = APIRouter()

# http://localhost:8000/predict

@main_router.get("/predict/{tarot_type}")
def predict(
    tarot_type: str,
    prompt: str,
    session: Session = Depends(get_sesstion_depends)
) -> PredictionResponse:
    # """
    # 1. Creates a prediction using the specified tarot type and prompt (क्लास का एक इंस्टेंस बनाएँ). 
    # 2. The prediction function should be called within a try-finally block,
    #     where the service's close() method is called in the finally block.
    # """

    new_main_service = MainService(session, tarot_type, prompt)
    try:
        return new_main_service.predict()
    finally:
        # error=False temporary
        new_main_service.close(False)
        