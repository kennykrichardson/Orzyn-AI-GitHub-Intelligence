from fastapi import APIRouter

from apps.api.models.repository import (
    RepositoryResponse,
)

from apps.api.services.github_service import (
    analyze_repository,
)

router = APIRouter(
    prefix="/repositories",
    tags=["Repositories"],
)


@router.get(
    "/{owner}/{repo_name}",
    response_model=RepositoryResponse,
)
def get_repository(
    owner: str,
    repo_name: str,
):
    return analyze_repository(
        owner,
        repo_name,
    )