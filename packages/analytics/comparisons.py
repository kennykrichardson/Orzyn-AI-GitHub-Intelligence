def compare_snapshots(
    old_snapshot,
    new_snapshot,
):
    return {
        "productivity_change":
            round(
                new_snapshot.productivity_score
                - old_snapshot.productivity_score,
                2,
            ),

        "health_change":
            round(
                new_snapshot.health_score
                - old_snapshot.health_score,
                2,
            ),

        "risk_change":
            round(
                new_snapshot.risk_score
                - old_snapshot.risk_score,
                2,
            ),
    }