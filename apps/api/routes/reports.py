from fastapi import APIRouter

from apps.api.models.report import (
    FullReportResponse,
)

from apps.api.services.report_service import (
    generate_repository_report,
)

router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.get(
    "/{owner}/{repo_name}",
    response_model=FullReportResponse,
)
def report(
    owner: str,
    repo_name: str,
):
    return generate_repository_report(
        owner,
        repo_name,
    )