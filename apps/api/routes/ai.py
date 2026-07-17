from fastapi import APIRouter

from apps.api.services.github_service import (
    analyze_repository,
)

from apps.api.services.analytics_service import (
    calculate_repository_metrics,
)

from apps.api.services.ai_service import (
    generate_repository_summary,
)

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.get(
    "/summary/{owner}/{repo_name}"
)
def ai_summary(
    owner: str,
    repo_name: str,
):
    repository_data = analyze_repository(
        owner,
        repo_name,
    )

    metrics = calculate_repository_metrics(
        repository_data
    )

    summary = generate_repository_summary(
        repository_data,
        metrics,
    )

    return {
        "summary": summary,
        "metrics": metrics,
    }