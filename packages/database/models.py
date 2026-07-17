from sqlalchemy import Column
from sqlalchemy import Float
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime
from datetime import UTC, datetime

from packages.database.engine import Base


class Repository(Base):
    __tablename__ = "repositories"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    github_id = Column(
        Integer,
        unique=True,
        nullable=False,
    )

    name = Column(
        String,
        nullable=False,
    )

    owner = Column(
        String,
        nullable=False,
    )

    github_url = Column(
        String,
        unique=True,
        nullable=False,
    )

    description = Column(Text)

    language = Column(String)

    stars = Column(
        Integer,
        default=0,
    )

    forks = Column(
        Integer,
        default=0,
    )

    watchers = Column(
        Integer,
        default=0,
    )

    open_issues = Column(
        Integer,
        default=0,
    )

    last_synced_at = Column(
    DateTime,
    default=lambda: datetime.now(UTC),
)

class RepositoryAnalytics(Base):
    __tablename__ = "repository_analytics"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    repository_id = Column(
        Integer,
        nullable=False,
    )

    productivity_score = Column(
        Float,
        default=0,
    )

    velocity_score = Column(
        Float,
        default=0,
    )

    bus_factor = Column(
        Float,
        default=0,
    )

    risk_score = Column(
        Float,
        default=0,
    )

    health_score = Column(
    Float,
    default=0,
)

class AnalyticsSnapshot(Base):
    __tablename__ = "analytics_snapshots"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    repository_id = Column(
        Integer,
        nullable=False,
    )

    productivity_score = Column(
        Float,
        default=0,
    )

    velocity_score = Column(
        Float,
        default=0,
    )

    bus_factor = Column(
        Float,
        default=0,
    )

    risk_score = Column(
        Float,
        default=0,
    )

    health_score = Column(
        Float,
        default=0,
    )

    recorded_at = Column(
        DateTime,
        default=lambda: datetime.now(UTC),
    )
    
    snapshot_type = Column(
        String,
        default="daily",
   )
class RepositoryReport(Base):
    __tablename__ = "repository_reports"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    repository_id = Column(
        Integer,
        nullable=False,
    )

    summary = Column(Text)

    insights = Column(Text)

class Contributor(Base):
    __tablename__ = "contributors"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    repository_id = Column(
        Integer,
        nullable=False,
    )

    username = Column(
        String,
        nullable=False,
    )

    contributions = Column(
        Integer,
        default=0,
    )

    profile_url = Column(
        String,
        nullable=False,
    )