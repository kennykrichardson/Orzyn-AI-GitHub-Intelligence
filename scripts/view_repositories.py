from packages.database.engine import (
    SessionLocal,
)

from packages.database.models import (
    Repository,
)

db = SessionLocal()

repositories = (
    db.query(Repository)
    .all()
)

for repository in repositories:
    print(
        repository.id,
        repository.name,
        repository.owner,
    )

db.close()