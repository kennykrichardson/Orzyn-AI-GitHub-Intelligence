def calculate_bus_factor(
    contributors: list,
):
    if not contributors:
        return 0

    total_contributions = sum(
        contributor["contributions"]
        for contributor in contributors
    )

    if total_contributions == 0:
        return 0

    dominant = max(
        contributors,
        key=lambda c: c["contributions"]
    )

    contribution_ratio = (
        dominant["contributions"]
        / total_contributions
    )

    return round(
        1 / contribution_ratio,
        2,
    )