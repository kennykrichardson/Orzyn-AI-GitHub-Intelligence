from packages.database.engine import (
    SessionLocal,
)

from packages.database.models import (
    Repository,
)


def get_cached_repository(
    github_id: int,
):
    db = SessionLocal()

    try:
        return (
            db.query(Repository)
            .filter(
                Repository.github_id
                == github_id
            )
            .first()
        )

    finally:
        db.close()


def repository_to_dict(
    repository,
):
    if not repository:
        return None

    return {
        "id": repository.github_id,
        "name": repository.name,
        "owner": repository.owner,
        "url": repository.github_url,
        "description": repository.description,
        "language": repository.language,
        "stars": repository.stars,
        "forks": repository.forks,
        "watchers": repository.watchers,
        "open_issues": repository.open_issues,
    }