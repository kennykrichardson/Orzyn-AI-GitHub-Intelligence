from datetime import datetime
from datetime import timedelta


def filter_last_days(
    snapshots,
    days: int,
):
    cutoff = (
        datetime.utcnow()
        - timedelta(days=days)
    )

    return [
        snapshot
        for snapshot in snapshots
        if snapshot.recorded_at >= cutoff
    ]