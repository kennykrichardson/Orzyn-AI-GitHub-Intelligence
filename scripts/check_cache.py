from packages.database.engine import (
    SessionLocal,
)

from packages.database.models import (
    Repository,
)

from packages.github_ingestion.cache_policy import (
    is_cache_expired,
)

db = SessionLocal()

repositories = (
    db.query(Repository)
    .all()
)

for repository in repositories:
    print(
        repository.name,
        repository.last_synced_at,
        is_cache_expired(
            repository.last_synced_at
        ),
    )

db.close()