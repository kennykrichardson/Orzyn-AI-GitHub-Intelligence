def calculate_velocity(
    commit_count: int,
    contributor_count: int,
):
    """
    Velocity Score (0-100)

    Measures recent development activity.
    """

    score = min(
        commit_count * 2,
        100,
    )

    return round(
        score,
        2,
    )