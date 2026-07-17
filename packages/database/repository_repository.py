from sqlalchemy.orm import Session
from datetime import datetime
from datetime import UTC
from packages.database.models import (
    Repository,
)


def get_repository_by_github_id(
    db: Session,
    github_id: int,
):
    return (
        db.query(Repository)
        .filter(
            Repository.github_id == github_id
        )
        .first()
    )


def create_repository(
    db: Session,
    repository_data: dict,
):
    repository = Repository(
        github_id=repository_data["id"],
        name=repository_data["name"],
        owner=repository_data["owner"],
        github_url=repository_data["url"],
        description=repository_data.get(
            "description"
        ),
        language=repository_data.get(
            "language"
        ),
        stars=repository_data.get(
            "stars",
            0,
        ),
        forks=repository_data.get(
            "forks",
            0,
        ),
        watchers=repository_data.get(
            "watchers",
            0,
        ),
        open_issues=repository_data.get(
            "open_issues",
            0,
        ),
    )

    db.add(repository)
    db.commit()
    db.refresh(repository)

    return repository


def update_repository(
    db: Session,
    repository: Repository,
    repository_data: dict,
):
    repository.stars = repository_data.get(
        "stars",
        0,
    )

    repository.forks = repository_data.get(
        "forks",
        0,
    )

    repository.watchers = repository_data.get(
        "watchers",
        0,
    )

    repository.open_issues = repository_data.get(
        "open_issues",
        0,
        
    )
    repository.last_synced_at = (
    datetime.now(UTC)
    ) 
    db.commit()
    db.refresh(repository)

    return repository