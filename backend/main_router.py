from fastapi import APIRouter

# Написать нужные эндпоинты на которые будет посылать запрос фронтенд
#
# get_prediction

main_router = APIRouter()

# http://localhost:8000/predict
@main_router.get("/predict/{type}/")
def predict(
    type_: str,
    prompt: str
):
    return type_, prompt