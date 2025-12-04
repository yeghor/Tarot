from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped
from backend.types import TaroTypes

class Base(DeclarativeBase):
    pass

class TaroCard(Base):
    card_id: Mapped[int] = mapped_column(primary_key=True)
    card_type: Mapped[TaroTypes] = mapped_column()
    img_name = Mapped[str] = mapped_column(nullable=True, default="")

    description: Mapped[str] = mapped_column()


Base.metadata.create_all()