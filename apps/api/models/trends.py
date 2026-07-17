from pydantic import BaseModel


class TrendResponse(BaseModel):
    repository_id: int

    productivity_growth: float
    health_growth: float

    productivity_trend: str
    health_trend: str