def generate_insights(
    analytics_data: dict,
    trend_data: dict,
):
    insights = []

    health_score = analytics_data[
        "health_score"
    ]

    risk_score = analytics_data[
        "risk_score"
    ]

    productivity_growth = (
        trend_data.get(
            "productivity_growth",
            0,
        )
    )

    health_growth = (
        trend_data.get(
            "health_growth",
            0,
        )
    )

    if health_score >= 80:
        insights.append(
            "Repository health is excellent."
        )

    elif health_score >= 60:
        insights.append(
            "Repository health is good but has room for improvement."
        )

    else:
        insights.append(
            "Repository health requires attention."
        )

    if risk_score > 15:
        insights.append(
            "Contributor concentration risk remains high."
        )

    if productivity_growth > 10:
        insights.append(
            "Development productivity is increasing."
        )

    elif productivity_growth < -10:
        insights.append(
            "Development productivity is declining."
        )

    if health_growth > 10:
        insights.append(
            "Overall repository health is improving."
        )

    return insights