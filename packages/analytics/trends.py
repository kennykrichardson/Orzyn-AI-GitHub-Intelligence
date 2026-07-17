def calculate_growth_rate(
    first_value: float,
    last_value: float,
):
    if first_value <= 0:
        return 0

    growth = (
        (
            last_value
            - first_value
        )
        / first_value
    ) * 100

    return round(
        growth,
        2,
    )


def determine_trend(
    growth_rate: float,
):
    if growth_rate > 10:
        return "growing"

    if growth_rate < -10:
        return "declining"

    return "stable"