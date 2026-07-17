from packages.database.engine import (
    SessionLocal,
)

from packages.database.models import (
    AnalyticsSnapshot,
)

db = SessionLocal()

snapshots = (
    db.query(
        AnalyticsSnapshot
    )
    .all()
)

for snapshot in snapshots:
    print(
        snapshot.repository_id,
        snapshot.productivity_score,
        snapshot.recorded_at,
    )

db.close()