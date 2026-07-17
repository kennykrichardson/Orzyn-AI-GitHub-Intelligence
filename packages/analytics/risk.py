def calculate_risk(
    bus_factor: float,
):
    """
    Risk Score (0-100)

    Lower is better.

    This score intentionally avoids
    punishing solo-maintained projects
    too aggressively.

    Risk ranges:

    0-20   = Low
    21-40  = Moderate
    41-60  = Elevated
    61-80  = High
    81-100 = Critical
    """

    if bus_factor <= 1:
        return 35

    if bus_factor <= 2:
        return 28

    if bus_factor <= 3:
        return 22

    if bus_factor <= 5:
        return 16

    if bus_factor <= 8:
        return 10

    return 5