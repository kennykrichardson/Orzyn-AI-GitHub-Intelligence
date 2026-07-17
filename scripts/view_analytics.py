from packages.database.engine import (
    SessionLocal,
)

from packages.database.models import (
    RepositoryAnalytics,
)

db = SessionLocal()

analytics = (
    db.query(
        RepositoryAnalytics
    )
    .all()
)

for row in analytics:
    print(
        row.repository_id,
        row.productivity_score,
        row.velocity_score,
        row.bus_factor,
        row.risk_score,
    )

db.close()