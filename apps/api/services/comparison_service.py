from packages.database.engine import (
    SessionLocal,
)

from packages.database.repository_repository import (
    get_repository_by_github_id,
)

from packages.database.snapshot_repository import (
    get_snapshots,
)

from packages.github_ingestion.repositories import (
    extract_repository_data,
)

from packages.analytics.comparisons import (
    compare_snapshots,
)


def compare_repository_history(
    owner: str,
    repo_name: str,
):
    repository_data = (
        extract_repository_data(
            owner,
            repo_name,
        )
    )

    db = SessionLocal()

    try:
        repository = (
            get_repository_by_github_id(
                db,
                repository_data["id"],
            )
        )

        if not repository:
            return {}

        snapshots = get_snapshots(
            db,
            repository.id,
        )

        if len(snapshots) < 2:
            return {}

        return compare_snapshots(
            snapshots[0],
            snapshots[-1],
        )

    finally:
        db.close()