from fastapi import APIRouter

from apps.api.services.insight_service import (
    get_repository_insights,
)

router = APIRouter(
    prefix="/insights",
    tags=["Engineering Insights"],
)


@router.get(
    "/{owner}/{repo_name}",
)
def repository_insights(
    owner: str,
    repo_name: str,
):
    return get_repository_insights(
        owner,
        repo_name,
    )