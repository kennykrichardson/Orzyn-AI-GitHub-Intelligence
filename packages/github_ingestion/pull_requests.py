from packages.github_ingestion.github_client import (
    get_repository,
)


def get_pull_requests(
    owner: str,
    repo_name: str,
    limit: int = 50,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    pull_requests = []

    for pr in repo.get_pulls(
        state="all"
    )[:limit]:
        pull_requests.append(
            {
                "id": pr.id,
                "number": pr.number,
                "title": pr.title,
                "state": pr.state,
                "created_at": str(
                    pr.created_at
                ),
                "merged": pr.merged,
                "user": pr.user.login,
            }
        )

    return pull_requests


def get_pull_request_count(
    owner: str,
    repo_name: str,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    return repo.get_pulls(
        state="all"
    ).totalCount