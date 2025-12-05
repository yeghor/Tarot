from sqlalchemy.orm import mapped_column, Mapped, DeclarativeBase
from database.db_connect import engine

class Base(DeclarativeBase):
    pass

class TarotCard(Base):
    __tablename__ = "tarot_card"

    card_id: Mapped[str] = mapped_column(primary_key=True)
    card_name: Mapped[str] = mapped_column()
    img_name: Mapped[str] = mapped_column(nullable=True, default="")

    regular_desc: Mapped[str] = mapped_column()
    flipped_desc: Mapped[str] = mapped_column()

Base.metadata.create_all(bind=engine)
