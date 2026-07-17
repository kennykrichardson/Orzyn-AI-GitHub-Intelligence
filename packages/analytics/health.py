def calculate_health_score(
    productivity_score: float,
    velocity_score: float,
    bus_factor: float,
    risk_score: float,
):
    """
    Health Score (0-100)
    """

    bus_factor_score = min(
        bus_factor * 25,
        100,
    )

    health_score = (
        productivity_score * 0.40
        + velocity_score * 0.30
        + bus_factor_score * 0.15
        + (100 - risk_score) * 0.15
    )

    return round(
        min(health_score, 100),
        2,
    )