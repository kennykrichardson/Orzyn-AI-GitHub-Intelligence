from sqlalchemy.orm import Session

from packages.database.models import (
    RepositoryReport,
)


def get_repository_report(
    db: Session,
    repository_id: int,
):
    return (
        db.query(
            RepositoryReport
        )
        .filter(
            RepositoryReport.repository_id
            == repository_id
        )
        .first()
    )


def create_repository_report(
    db: Session,
    repository_id: int,
    report_data: dict,
):
    report = RepositoryReport(
        repository_id=repository_id,
        summary=report_data["summary"],
        insights="\n".join(
            report_data["insights"]
        ),
    )

    db.add(report)
    db.commit()
    db.refresh(report)

    return report


def update_repository_report(
    db: Session,
    report,
    report_data: dict,
):
    report.summary = (
        report_data["summary"]
    )

    report.insights = "\n".join(
        report_data["insights"]
    )

    db.commit()
    db.refresh(report)

    return report