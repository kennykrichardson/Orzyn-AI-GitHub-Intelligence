import { api } from "./api";

export const getRepository = async (
  owner: string,
  repo: string
) => {
  const response = await api.get(
    `/repositories/${owner}/${repo}`
  );

  return response.data;
};