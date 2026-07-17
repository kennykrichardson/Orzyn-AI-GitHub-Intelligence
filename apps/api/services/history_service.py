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


def get_repository_history(
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
            return []

        snapshots = get_snapshots(
            db,
            repository.id,
        )

        history = []

        for snapshot in snapshots:
            history.append(
                {
                    "productivity_score": snapshot.productivity_score,
                    "velocity_score": snapshot.velocity_score,
                    "bus_factor": snapshot.bus_factor,
                    "risk_score": snapshot.risk_score,
                    "health_score": snapshot.health_score,
                    "recorded_at": snapshot.recorded_at.isoformat(),
                }
            )

        return history

    finally:
        db.close()