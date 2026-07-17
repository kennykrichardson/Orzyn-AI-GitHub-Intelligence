import { api } from "./api";

export const getAnalytics = async (
  owner: string,
  repo: string
) => {
  const response = await api.get(
    `/analytics/${owner}/${repo}`
  );

  return response.data;
};

export const getHistory = async (
  owner: string,
  repo: string
) => {
  const response = await api.get(
    `/analytics/history/${owner}/${repo}`
  );

  return response.data;
};

export const getInsights = async (
  owner: string,
  repo: string
) => {
  const response = await api.get(
    `/insights/${owner}/${repo}`
  );

  return response.data;
};