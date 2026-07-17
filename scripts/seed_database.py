from packages.database.engine import (
    Base,
    engine,
)

# IMPORTANT:
# Import models before create_all()

from packages.database.models import (
    Repository,
)

Base.metadata.create_all(
    bind=engine
)

print(
    "Database tables created successfully."
)