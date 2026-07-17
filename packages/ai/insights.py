def generate_insights(
    repository_data,
):
    insights = []

    insights.append(
        f"Repository has {repository_data.stars:,} stars."
    )

    insights.append(
        f"Primary language is {repository_data.language or 'Unknown'}."
    )

    insights.append(
        f"Repository has {repository_data.forks:,} forks."
    )

    insights.append(
        f"Repository contains {repository_data.open_issues} open issues."
    )

    insights.append(
        f"Repository is maintained by {repository_data.owner}."
    )

    return insights