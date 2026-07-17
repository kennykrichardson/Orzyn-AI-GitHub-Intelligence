from sqlalchemy.orm import Session

from packages.database.models import (
    AnalyticsSnapshot,
)


def create_snapshot(
    db: Session,
    repository_id: int,
    analytics_data: dict,
):
    snapshot = AnalyticsSnapshot(
        repository_id=repository_id,
        productivity_score=analytics_data[
            "productivity_score"
        ],
        velocity_score=analytics_data[
            "velocity_score"
        ],
        bus_factor=analytics_data[
            "bus_factor"
        ],
        risk_score=analytics_data[
            "risk_score"
        ],
        health_score=analytics_data[
            "health_score"
        ],
        snapshot_type="daily",
    )

    db.add(snapshot)
    db.commit()

    return snapshot


def get_snapshots(
    db: Session,
    repository_id: int,
):
    return (
        db.query(
            AnalyticsSnapshot
        )
        .filter(
            AnalyticsSnapshot.repository_id
            == repository_id
        )
        .order_by(
            AnalyticsSnapshot.recorded_at.asc()
        )
        .all()
    )