from fastapi import APIRouter

from apps.api.models.trends import (
    TrendResponse,
)

from apps.api.services.trend_service import (
    get_repository_trends,
)

router = APIRouter(
    prefix="/analytics/trends",
    tags=["Analytics Trends"],
)


@router.get(
    "/{owner}/{repo_name}",
    response_model=TrendResponse,
)
def repository_trends(
    owner: str,
    repo_name: str,
):
    return get_repository_trends(
        owner,
        repo_name,
    )