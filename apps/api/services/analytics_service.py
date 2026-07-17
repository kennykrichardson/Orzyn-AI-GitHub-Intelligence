from packages.analytics.productivity import (
    calculate_productivity,
)

from packages.analytics.velocity import (
    calculate_velocity,
)

from packages.analytics.bus_factor import (
    calculate_bus_factor,
)

from packages.analytics.risk import (
    calculate_risk,
)

from packages.database.engine import (
    SessionLocal,
)

from packages.database.repository_repository import (
    get_repository_by_github_id,
)

from packages.database.analytics_repository import (
    get_repository_analytics,
    create_repository_analytics,
    update_repository_analytics,
)

from packages.database.snapshot_repository import (
    create_snapshot,
)

from apps.api.models.analytics import (
    AnalyticsData,
)

from packages.analytics.health import (
    calculate_health_score,
)

def calculate_repository_metrics(
    repository_data,
):
    commit_count = (
        repository_data.commit_count
    )

    pull_request_count = (
        repository_data.pull_request_count
    )

    contributors = (
        repository_data.contributors
    )

    contributor_count = len(
        contributors
    )

    productivity_score = (
        calculate_productivity(
            commit_count,
            pull_request_count,
        )
    )

    velocity_score = (
        calculate_velocity(
            commit_count,
            contributor_count,
        )
    )

    bus_factor = (
        calculate_bus_factor(
            contributors
        )
    )

    risk_score = calculate_risk(
        bus_factor
    )
    
    health_score = (
         calculate_health_score(
         productivity_score,
         velocity_score,
         bus_factor,
         risk_score,
   )
)
    
    print(type(health_score))
    print(health_score)

    analytics_data = {
        "productivity_score": productivity_score,
        "velocity_score": velocity_score,
        "bus_factor": bus_factor,
        "risk_score": risk_score,
        "health_score": health_score,
    }

    db = SessionLocal()

    try:
        repository = (
            get_repository_by_github_id(
                db,
                repository_data.id,
            )
        )

        if repository:
            existing_analytics = (
                get_repository_analytics(
                    db,
                    repository.id,
                )
            )

            if existing_analytics:
                update_repository_analytics(
                    db,
                    existing_analytics,
                    analytics_data,
                )
            else:
                create_repository_analytics(
                    db,
                    repository.id,
                    analytics_data,
                )

            create_snapshot(
                db,
                repository.id,
                analytics_data,
            )

    finally:
        db.close()

    return AnalyticsData(
        **analytics_data
    )