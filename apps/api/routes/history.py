from typing import List

from fastapi import APIRouter

from apps.api.models.history import (
    AnalyticsHistoryItem,
)

from apps.api.services.history_service import (
    get_repository_history,
)

router = APIRouter(
    prefix="/analytics/history",
    tags=["Analytics History"],
)


@router.get(
    "/{owner}/{repo_name}",
    response_model=List[
        AnalyticsHistoryItem
    ],
)
def analytics_history(
    owner: str,
    repo_name: str,
):
    return get_repository_history(
        owner,
        repo_name,
    )