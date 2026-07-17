from fastapi import APIRouter

from apps.api.services.comparison_service import (
    compare_repository_history,
)

router = APIRouter(
    prefix="/analytics/comparison",
    tags=["Analytics Comparison"],
)


@router.get(
    "/{owner}/{repo_name}",
)
def comparison(
    owner: str,
    repo_name: str,
):
    return compare_repository_history(
        owner,
        repo_name,
    )