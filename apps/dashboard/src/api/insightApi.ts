export interface AIInsightResponse {
  repository: string;
  summary: string;
  insights: string[];
}

const API_BASE =
  "https://orzyn-api.onrender.com";

export async function getInsights(
  owner: string,
  repo: string
): Promise<AIInsightResponse> {
  const response =
    await fetch(
      `${API_BASE}/insights/${owner}/${repo}`
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch insights"
    );
  }

  return response.json();
}