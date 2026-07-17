def analyze_languages(
    repository_data,
):
    language = (
        repository_data.language
        if hasattr(repository_data, "language")
        else "Unknown"
    )

    skills = []

    mapping = {
        "TypeScript": [
            "TypeScript",
            "JavaScript",
            "Frontend Development",
            "REST APIs",
        ],
        "Python": [
            "Python",
            "Backend Development",
            "Data Processing",
            "Automation",
        ],
        "Java": [
            "Java",
            "Object-Oriented Programming",
            "Backend Development",
        ],
        "Go": [
            "Go",
            "Backend Development",
            "Distributed Systems",
        ],
        "Rust": [
            "Rust",
            "Systems Programming",
            "Performance Engineering",
        ],
    }

    skills = mapping.get(
        language,
        [language],
    )

    return {
        "primary_language": language,
        "skills": skills,
        "confidence": 80,
    }