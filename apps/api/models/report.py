from pydantic import BaseModel

from apps.api.models.analytics import (
    AnalyticsResponse,
)


class AIReport(BaseModel):
    summary: str
    insights: list[str]


class ReportRepository(BaseModel):
    id: int
    name: str
    owner: str
    language: str | None = None
    stars: int


class FullReportResponse(BaseModel):
    repository: ReportRepository
    metrics: AnalyticsResponse
    report: AIReport