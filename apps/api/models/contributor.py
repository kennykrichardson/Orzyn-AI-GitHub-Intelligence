from pydantic import BaseModel


class ContributorResponse(BaseModel):
    username: str
    contributions: int
    profile_url: str