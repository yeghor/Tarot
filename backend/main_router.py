from fastapi import APIRouter
from pydantic_models import Schema

# Написать нужные эндпоинты на которые будет посылать запрос фронтенд
#
# get_prediction

<<<<<<< HEAD
main_router = APIRouter()
=======
main_router = APIRouter()
<<<<<<< HEAD
=======

# http://localhost:8000/predict

@main_router.get("/predict/{type}/{prompt}")
def predict(
    type_: str,
    prompt: str
):
    return type_, prompt
>>>>>>> c8bad3ac930c8886d7b7f5b50dd123ac32225848
>>>>>>> f1cbb1c1014ac9d2e660c3f65ebb29167d8144fc
