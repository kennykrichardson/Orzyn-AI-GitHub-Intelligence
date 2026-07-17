from datetime import datetime
from datetime import UTC
from datetime import timedelta


CACHE_DURATION_HOURS = 24


def is_cache_expired(
    last_synced_at,
):
    if not last_synced_at:
        return True

    expiration_time = (
        last_synced_at
        + timedelta(
            hours=CACHE_DURATION_HOURS
        )
    )

    return (
        datetime.now(UTC)
        > expiration_time
    )