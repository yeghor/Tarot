from fastapi import APIRouter
from pydantic_models import Schema

# Написать нужные эндпоинты на которые будет посылать запрос фронтенд
#
# get_prediction

main_router = APIRouter()

# http://localhost:8000/predict

@main_router.get("/predict/{type}/{prompt}")
def predict(
    type_: str,
    prompt: str
):
    return type_, prompt
