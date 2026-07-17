from pydantic import BaseModel


class AnalyticsHistoryItem(BaseModel):
    productivity_score: float
    velocity_score: float
    bus_factor: float
    risk_score: float
    health_score: float

    recorded_at: str