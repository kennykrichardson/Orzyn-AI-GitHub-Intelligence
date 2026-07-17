from pydantic import BaseModel


class GitHubRepositoryData(BaseModel):
    id: int
    name: str
    owner: str

    description: str | None = None
    language: str | None = None

    stars: int
    forks: int
    watchers: int
    open_issues: int

    default_branch: str

    created_at: str
    updated_at: str

    url: str

    commit_count: int = 0
    pull_request_count: int = 0

    contributors: list = []