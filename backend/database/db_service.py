from abc import ABC, abstractmethod
from typing import List
from database.db_models import TarotCard, Base
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
        self._session = session

    def commit_and_close(self, commit: bool = True):
        """Set commmit to False to discard all changes"""
        if commit:
            self._session.commit()
        self._session.close()

    def get_cards(self) -> List[TarotCard]:
        result = self._session.execute(
            select(TarotCard)
        )
        return result.scalars().all()

    def insert_models(self, *args: Base) -> None:
        self._session.add_all(args)