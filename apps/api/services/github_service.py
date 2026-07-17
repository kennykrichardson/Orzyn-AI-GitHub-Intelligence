from packages.github_ingestion.repositories import (
    extract_repository_data,
)

from packages.github_ingestion.commits import (
    get_commit_count,
)

from packages.github_ingestion.pull_requests import (
    get_pull_request_count,
)

from packages.github_ingestion.contributors import (
    get_contributors,
)

from packages.database.engine import (
    SessionLocal,
)

from packages.database.repository_repository import (
    create_repository,
    get_repository_by_github_id,
    update_repository,
)

from packages.database.contributor_repository import (
    create_contributors,
    delete_contributors,
)

from apps.api.models.github import (
    GitHubRepositoryData,
)


def analyze_repository(
    owner: str,
    repo_name: str,
):
    repository_data = extract_repository_data(
        owner,
        repo_name,
    )

    db = SessionLocal()

    try:
        existing_repository = (
            get_repository_by_github_id(
                db,
                repository_data["id"],
            )
        )

        if existing_repository:
            update_repository(
                db,
                existing_repository,
                repository_data,
            )

            repository_record = (
                existing_repository
            )

        else:
            repository_record = (
                create_repository(
                    db,
                    repository_data,
                )
            )

    finally:
        db.close()

    repository_data["commit_count"] = (
        get_commit_count(
            owner,
            repo_name,
        )
    )

    repository_data[
        "pull_request_count"
    ] = get_pull_request_count(
        owner,
        repo_name,
    )

    repository_data["contributors"] = (
        get_contributors(
            owner,
            repo_name,
        )
    )

    db = SessionLocal()

    try:
        delete_contributors(
            db,
            repository_record.id,
        )

        create_contributors(
            db,
            repository_record.id,
            repository_data[
                "contributors"
            ],
        )

    finally:
        db.close()

    return GitHubRepositoryData(
        **repository_data
    )