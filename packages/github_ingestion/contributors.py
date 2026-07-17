from packages.github_ingestion.github_client import (
    get_repository,
)


def get_contributors(
    owner: str,
    repo_name: str,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    contributors = []

    for contributor in repo.get_contributors():
        contributors.append(
            {
                "username": contributor.login,
                "contributions": contributor.contributions,
                "profile_url": contributor.html_url,
            }
        )

    return contributors


def get_top_contributors(
    owner: str,
    repo_name: str,
    limit: int = 10,
):
    contributors = get_contributors(
        owner,
        repo_name,
    )

    return contributors[:limit]