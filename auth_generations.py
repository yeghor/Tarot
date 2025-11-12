from abc import abstractmethod, ABC

import bcrypt

class PasswordServiceAbstract(ABC):
    @abstractmethod
    def hash_password(self, password: str) -> str:
        """Method that hashes and returning password hash string"""

    @abstractmethod
    def verify_password(self, entered_password: str, hashed_password: str) -> bool:
        """Method that verifies password entered by user"""

class PasswordService(PasswordServiceAbstract):

    def hash_password(self, password: str) -> str:
        # password = bcrypt.hash_password(password)
        pass_bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hash_password = bcrypt.hashpw(pass_bytes, salt)
        return hash_password.decode('utf-8')

    def verify_password(self, entered_password: str, hashed_password: str) -> bool:
        entered_password_bytes = entered_password.encode('utf-8')
        hashed_password_bytes = hashed_password.encode('utf-8')

        try:
            return bcrypt.checkpw(entered_password_bytes, hashed_password_bytes)
        except ValueError:
            return False

        """
        entered_password = entered_password.encode('utf-8')
        res = bcrypt.checkpw(Bytes, hashed_password)
        return res
        """