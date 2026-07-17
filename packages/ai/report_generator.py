from packages.ai.insights import (
    generate_insights,
)

from packages.ai.summaries import (
    generate_summary,
)


def generate_report(
    repository_data: dict,
):
    summary = generate_summary(
        repository_data.name,
        repository_data.language,
        repository_data.stars,
    )

    insights = generate_insights(
        repository_data
    )

    return {
        "summary": summary,
        "insights": insights,
    }