import {
  AnalyticsData,
  Snapshot,
} from "../types/analytics";

const API_BASE =
  "https://orzyn-api.onrender.com";

export async function getAnalytics(
  owner: string,
  repo: string
): Promise<AnalyticsData> {
  const response =
    await fetch(
      `${API_BASE}/analytics/${owner}/${repo}`
    );

  if (!response.ok) {
    throw new Error(
      `Analytics request failed (${response.status})`
    );
  }

  return response.json();
}

export async function getHistory(
  owner: string,
  repo: string
): Promise<Snapshot[]> {
  const response =
    await fetch(
      `${API_BASE}/analytics/history/${owner}/${repo}`
    );

  if (!response.ok) {
    throw new Error(
      `History request failed (${response.status})`
    );
  }

  return response.json();
}