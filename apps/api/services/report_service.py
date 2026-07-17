from apps.api.services.github_service import (
    analyze_repository,
)

from apps.api.services.analytics_service import (
    calculate_repository_metrics,
)

from apps.api.services.ai_service import (
    create_ai_report,
)

from packages.database.repository_repository import (
    get_repository_by_github_id,
)

from packages.database.engine import (
    SessionLocal,
)

from packages.database.report_repository import (
    get_repository_report,
    create_repository_report,
    update_repository_report,
)


def generate_repository_report(
    owner: str,
    repo_name: str,
):
    repository_data = analyze_repository(
        owner,
        repo_name,
    )

    metrics = (
        calculate_repository_metrics(
            repository_data
        )
    )

    report = create_ai_report(
        repository_data,
        metrics,
    )

    db = SessionLocal()

    try:
        repository = (
            get_repository_by_github_id(
                db,
                repository_data.id,
            )
        )

        if repository:
            existing_report = (
                get_repository_report(
                    db,
                    repository.id,
                )
            )

            if existing_report:
                update_repository_report(
                    db,
                    existing_report,
                    report,
                )
            else:
                create_repository_report(
                    db,
                    repository.id,
                    report,
                )

    finally:
        db.close()

    return {
        "repository": {
            "id": repository_data.id,
            "name": repository_data.name,
            "owner": repository_data.owner,
            "language": repository_data.language,
            "stars": repository_data.stars,
        },
        "metrics": metrics,
        "report": report,
    }