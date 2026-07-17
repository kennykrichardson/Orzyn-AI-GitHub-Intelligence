from packages.database.engine import (
    SessionLocal,
)

from packages.database.models import (
    RepositoryReport,
)

db = SessionLocal()

reports = (
    db.query(
        RepositoryReport
    )
    .all()
)

for report in reports:
    print(
        report.repository_id
    )

    print(
        report.summary
    )

    print(
        report.insights
    )

db.close()