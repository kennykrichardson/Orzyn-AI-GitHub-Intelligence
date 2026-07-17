from packages.analytics.insights import (
    generate_insights,
)

from apps.api.services.trend_service import (
    get_repository_trends,
)

from apps.api.services.github_service import (
    analyze_repository,
)

from apps.api.services.analytics_service import (
    calculate_repository_metrics,
)

from apps.api.services.ai_service import (
    generate_repository_summary,
    generate_repository_insights,
)

def get_repository_insights(
    owner: str,
    repo_name: str,
):
    repository = analyze_repository(
        owner,
        repo_name,
    )

    analytics = (
        calculate_repository_metrics(
            repository
        )
    )

    trends = (
        get_repository_trends(
            owner,
            repo_name,
        )
    )

    ai_insights = (
        generate_repository_insights(
            repository,
            analytics,
        )
    )

    ai_summary = generate_repository_summary(
        repository,
        analytics,
    )

    return {
        "repository": repository.name,
        "summary": ai_summary,
        "insights": ai_insights,
    }