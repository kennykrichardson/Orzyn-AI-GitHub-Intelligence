import os
import requests
from dotenv import load_dotenv

load_dotenv()

ACCOUNT_ID = os.getenv(
    "CLOUDFLARE_ACCOUNT_ID"
)

API_TOKEN = os.getenv(
    "CLOUDFLARE_API_TOKEN"
)

AI_ENABLED = (
    os.getenv(
        "AI_ENABLED",
        "true"
    ).lower()
    == "true"
)

def _call_ai(
    prompt: str,
):
    if not AI_ENABLED:
        return (
            "AI generation is currently "
            "disabled by configuration."
        )

    response = requests.post(
        f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast",
        headers={
            "Authorization": f"Bearer {API_TOKEN}",
            "Content-Type": "application/json",
        },
        json={
            "messages": [
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            "max_tokens": 1200,
        },
        timeout=60,
    )

    if response.status_code != 200:
        return (
            f"AI Error ({response.status_code}): "
            f"{response.text}"
        )

    result = response.json()

    if not result.get("success"):
        return f"Cloudflare Error: {result}"

    response_data = result.get(
        "result",
        {}
    )

    return (
        response_data.get("response")
        or response_data.get("text")
        or str(response_data)
    )


def generate_repository_summary(
    repository_data,
    analytics_data,
):
    prompt = f"""
You are a senior engineering manager reviewing a GitHub repository.

Repository Name:
{repository_data.name}

Description:
{repository_data.description}

Primary Language:
{repository_data.language}

Stars:
{repository_data.stars}

Forks:
{repository_data.forks}

Metrics:

Health Score: {analytics_data.health_score}
Productivity Score: {analytics_data.productivity_score}
Velocity Score: {analytics_data.velocity_score}
Risk Score: {analytics_data.risk_score}
Bus Factor: {analytics_data.bus_factor}

Create a concise executive summary.

Focus on:
- What the repository does
- Its strongest qualities
- What the engineering metrics indicate
- Key improvement opportunities

Return ONLY valid markdown using EXACTLY this structure:

# Repository Overview

A short paragraph explaining the repository and its purpose.

# Key Strengths

- Strength 1
- Strength 2
- Strength 3

# Engineering Assessment

A short paragraph interpreting the metrics.

# Recommendations

- Recommendation 1
- Recommendation 2
- Recommendation 3

Rules:
- Be positive before discussing weaknesses.
- Do not mention every metric individually.
- Do not repeat numbers unnecessarily.
- Keep the entire response under 300 words.
- Use markdown headings beginning with #.
- Use markdown bullet lists beginning with -.
"""

    return _call_ai(prompt)

def generate_repository_insights(
    repository_data,
    analytics_data,
):
    prompt = f"""
You are a senior engineering manager.

Repository:
{repository_data.name}

Description:
{repository_data.description}

Language:
{repository_data.language}

Health Score:
{analytics_data.health_score}

Productivity Score:
{analytics_data.productivity_score}

Velocity Score:
{analytics_data.velocity_score}

Risk Score:
{analytics_data.risk_score}

Bus Factor:
{analytics_data.bus_factor}

Generate 5 concise engineering insights.

Each insight should be:

- Practical
- Specific
- Repository-focused
- One sentence

Return ONLY bullet points.
"""

    result = _call_ai(prompt)

    return [
        line.replace("-", "").strip()
        for line in result.split("\n")
        if line.strip()
    ]

def generate_risk_assessment(
    repository_data,
    analytics_data,
):
    prompt = f"""
You are a senior software architect.

Evaluate repository risk.

Repository:
{repository_data.name}

Health Score:
{analytics_data.health_score}

Productivity Score:
{analytics_data.productivity_score}

Velocity Score:
{analytics_data.velocity_score}

Risk Score:
{analytics_data.risk_score}

Bus Factor:
{analytics_data.bus_factor}

Do not assume a single contributor automatically
creates a dangerous repository.

Explain:

1. Risk Drivers
2. Mitigating Factors
3. Overall Risk Assessment

Use concise engineering language.
"""

    return _call_ai(prompt)


def generate_repository_roadmap(
    repository_data,
    analytics_data,
):
    prompt = f"""
You are a senior engineering manager.

Repository:
{repository_data.name}

Description:
{repository_data.description}

Health Score:
{analytics_data.health_score}

Productivity Score:
{analytics_data.productivity_score}

Velocity Score:
{analytics_data.velocity_score}

Risk Score:
{analytics_data.risk_score}

Bus Factor:
{analytics_data.bus_factor}

Create a prioritized engineering roadmap.

Provide:

1. Immediate Actions
2. Short-Term Improvements
3. Long-Term Improvements

Use bullet points.
"""

    return _call_ai(prompt)


def create_ai_report(
    repository_data,
    metrics,
):
    summary = generate_repository_summary(
        repository_data,
        metrics,
    )

    risk_assessment = (
        generate_risk_assessment(
            repository_data,
            metrics,
        )
    )

    roadmap = (
        generate_repository_roadmap(
            repository_data,
            metrics,
        )
    )

    return {
        "summary": summary,
        "risk_assessment": risk_assessment,
        "roadmap": roadmap,
        "insights": [
            f"Health Score: {metrics.health_score}",
            f"Velocity Score: {metrics.velocity_score}",
            f"Risk Score: {metrics.risk_score}",
            f"Bus Factor: {metrics.bus_factor}",
        ],
    }

