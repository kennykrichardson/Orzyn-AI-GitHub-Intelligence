from packages.github_ingestion.github_client import (
    get_repository,
)


def get_recent_commits(
    owner: str,
    repo_name: str,
    limit: int = 50,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    commits = []

    for commit in repo.get_commits()[:limit]:
        commits.append(
            {
                "sha": commit.sha,
                "author": (
                    commit.author.login
                    if commit.author
                    else "Unknown"
                ),
                "message": commit.commit.message,
                "date": str(
                    commit.commit.author.date
                ),
            }
        )

    return commits


def get_commit_count(
    owner: str,
    repo_name: str,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    return repo.get_commits().totalCount