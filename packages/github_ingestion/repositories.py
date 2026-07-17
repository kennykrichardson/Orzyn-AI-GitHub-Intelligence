from packages.github_ingestion.github_client import (
    get_repository,
)

from packages.github_ingestion.repository_cache import (
    get_cached_repository,
    repository_to_dict,
)

def extract_repository_data(
    owner: str,
    repo_name: str,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    return {
        "id": repo.id,
        "name": repo.name,
        "owner": repo.owner.login,
        "description": repo.description,
        "language": repo.language,
        "stars": repo.stargazers_count,
        "forks": repo.forks_count,
        "watchers": repo.watchers_count,
        "open_issues": repo.open_issues_count,
        "default_branch": repo.default_branch,
        "created_at": str(repo.created_at),
        "updated_at": str(repo.updated_at),
        "url": repo.html_url,
    }


def get_repository_statistics(
    owner: str,
    repo_name: str,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    return {
        "stars": repo.stargazers_count,
        "forks": repo.forks_count,
        "watchers": repo.watchers_count,
        "issues": repo.open_issues_count,
    }

def get_cached_repository_data(
    github_id: int,
):
    repository = get_cached_repository(
        github_id
    )

    return repository_to_dict(
        repository
    )