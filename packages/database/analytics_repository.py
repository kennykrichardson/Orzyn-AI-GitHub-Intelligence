from sqlalchemy.orm import Session

from packages.database.models import (
    RepositoryAnalytics,
)


def get_repository_analytics(
    db: Session,
    repository_id: int,
):
    return (
        db.query(
            RepositoryAnalytics
        )
        .filter(
            RepositoryAnalytics.repository_id
            == repository_id
        )
        .first()
    )


def create_repository_analytics(
    db: Session,
    repository_id: int,
    analytics_data: dict,
):
    analytics = (
        RepositoryAnalytics(
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
        )
    )

    db.add(analytics)
    db.commit()
    db.refresh(analytics)

    return analytics


def update_repository_analytics(
    db: Session,
    analytics,
    analytics_data: dict,
):
    analytics.productivity_score = (
        analytics_data[
            "productivity_score"
        ]
    )

    analytics.velocity_score = (
        analytics_data[
            "velocity_score"
        ]
    )

    analytics.bus_factor = (
        analytics_data[
            "bus_factor"
        ]
    )

    analytics.risk_score = (
        analytics_data[
            "risk_score"
        ]
    )

    analytics.health_score = (
        analytics_data[
        "health_score"
    ]
)

    db.commit()
    db.refresh(analytics)

    return analytics