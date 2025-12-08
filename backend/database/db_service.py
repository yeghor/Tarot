from abc import ABC, abstractmethod
from typing import List
from database.db_models import TarotCard, Base
from database.db_connect import engine
from sqlalchemy.orm import Session
from sqlalchemy import select

class DBServiceABC(ABC):
    @abstractmethod
    def __init__(self, session: Session):
        """Create instance"""

    @abstractmethod
    def commit_and_close(self, commit: bool = True) -> None:
        """Closes session, call required, preferably in finally block"""

    @abstractmethod
    def get_cards() -> List[TarotCard]:
        """Get all cards"""


class DBService(DBServiceABC):
    def __init__(self, session: Session):
        self.__session = session
        self.__engine = engine

    def commit_and_close(self, commit: bool = True):
        """Set commmit to False to discard all changes"""
        if commit:
            self.__session.commit()
        self.__session.close()

    def get_cards(self) -> List[TarotCard]:
        result = self.__session.execute(
            select(TarotCard)
        )
        return result.scalars().all()

    def drop_all(self) -> None:
        Base.metadata.drop_all(bind=self.__engine)
        Base.metadata.create_all(bind=self.__engine)

    def insert_models(self, *args: Base) -> None:
        self.__session.add_all(args)