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

from packages.analytics.trends import (
    calculate_growth_rate,
    determine_trend,
)

from packages.analytics.trend_windows import (
    filter_last_days,
)

def get_repository_trends(
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
            return {
                "repository_id": 0,
                "productivity_growth": 0,
                "health_growth": 0,
                "productivity_trend": "stable",
                "health_trend": "stable",
            }

        snapshots = (
            get_snapshots(
                db,
                repository.id,
            )
        )

        if len(snapshots) < 2:
            return {
                "repository_id": repository.id,
                "productivity_growth": 0,
                "health_growth": 0,
                "productivity_trend": "stable",
                "health_trend": "stable",
            }

        snapshots = filter_last_days(
            snapshots, 
            30,
        )

        if len(snapshots) < 2:
            return {
                "repository_id": repository.id,
                "productivity_growth": 0,
                "health_growth": 0,
                "productivity_trend": "stable",
                "health_trend": "stable",
            }
        
        first = snapshots[0]
        last = snapshots[-1]

        productivity_growth = (
            calculate_growth_rate(
                first.productivity_score,
                last.productivity_score,
            )
        )

        health_growth = (
            calculate_growth_rate(
                first.health_score,
                last.health_score,
            )
        )

        return {
            "repository_id": repository.id,
            "productivity_growth": productivity_growth,
            "health_growth": health_growth,
            "productivity_trend": determine_trend(
                productivity_growth
            ),
            "health_trend": determine_trend(
                health_growth
            ),
        }

    finally:
        db.close()