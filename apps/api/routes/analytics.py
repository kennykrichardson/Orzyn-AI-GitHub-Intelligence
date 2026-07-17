from fastapi import APIRouter

from apps.api.models.analytics import (
    AnalyticsResponse,
)

from apps.api.services.github_service import (
    analyze_repository,
)

from apps.api.services.analytics_service import (
    calculate_repository_metrics,
)

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get(
    "/{owner}/{repo_name}",
    response_model=AnalyticsResponse,
)
def analytics(
    owner: str,
    repo_name: str,
):
    repository_data = analyze_repository(
        owner,
        repo_name,
    )

    return calculate_repository_metrics(
        repository_data
    )