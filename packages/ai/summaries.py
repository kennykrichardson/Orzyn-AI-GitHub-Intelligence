def generate_summary(
    repository_name: str,
    language: str,
    stars: int,
):
    return (
        f"{repository_name} is a "
        f"{language} repository with "
        f"{stars} GitHub stars."
    )