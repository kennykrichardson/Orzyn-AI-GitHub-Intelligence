from typing import List

from fastapi import APIRouter

from apps.api.models.contributor import (
    ContributorResponse,
)

from packages.github_ingestion.contributors import (
    get_contributors,
)

router = APIRouter(
    prefix="/contributors",
    tags=["Contributors"],
)


@router.get(
    "/{owner}/{repo_name}",
    response_model=List[
        ContributorResponse
    ],
)
def contributors(
    owner: str,
    repo_name: str,
):
    return get_contributors(
        owner,
        repo_name,
    )