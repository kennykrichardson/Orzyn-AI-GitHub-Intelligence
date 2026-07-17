from pydantic import BaseModel


class AnalyticsResponse(BaseModel):
    productivity_score: float
    velocity_score: float
    bus_factor: float
    risk_score: float
    health_score: float


class AnalyticsData(BaseModel):
    productivity_score: float
    velocity_score: float
    bus_factor: float
    risk_score: float
    health_score: float