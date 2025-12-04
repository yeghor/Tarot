from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(
    "sqlite:///mlp_sqlite.db", connect_args={"autocommit": False}, echo=False
)

session_local = sessionmaker(autoflush=False, bind=engine)