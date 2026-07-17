from sqlalchemy.orm import Session

from packages.database.models import (
    Contributor,
)


def get_contributors(
    db: Session,
    repository_id: int,
):
    return (
        db.query(Contributor)
        .filter(
            Contributor.repository_id
            == repository_id
        )
        .all()
    )


def delete_contributors(
    db: Session,
    repository_id: int,
):
    (
        db.query(Contributor)
        .filter(
            Contributor.repository_id
            == repository_id
        )
        .delete()
    )

    db.commit()


def create_contributors(
    db: Session,
    repository_id: int,
    contributors: list,
):
    for contributor in contributors:
        db.add(
            Contributor(
                repository_id=repository_id,
                username=contributor[
                    "username"
                ],
                contributions=contributor[
                    "contributions"
                ],
                profile_url=contributor[
                    "profile_url"
                ],
            )
        )

    db.commit()