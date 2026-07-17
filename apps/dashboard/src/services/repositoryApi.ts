import { RepositoryInfo } from "../types/repository";

const API_BASE =
  "https://orzyn-api.onrender.com";

export async function getRepository(
  owner: string,
  repo: string
): Promise<RepositoryInfo> {
  const response =
    await fetch(
      `${API_BASE}/repositories/${owner}/${repo}`
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch repository"
    );
  }

  return response.json();
}