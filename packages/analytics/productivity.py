def calculate_productivity(
    commit_count: int,
    pull_request_count: int,
):
    """
    Productivity Score (0-100)

    Measures engineering output.
    """

    score = (
        commit_count * 1.5
        + pull_request_count * 4
    )

    return min(
        round(score, 2),
        100,
    )