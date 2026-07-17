from packages.database.engine import (
    SessionLocal,
)

from packages.database.models import (
    Contributor,
)

db = SessionLocal()

contributors = (
    db.query(Contributor)
    .all()
)

for contributor in contributors[:20]:
    print(
        contributor.username,
        contributor.contributions,
    )

db.close()