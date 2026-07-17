import {
  useEffect,
  useState,
} from "react";

import { getRepository }
from "../services/repositoryApi";

import { RepositoryInfo }
from "../types/repository";

export function useRepositoryInfo(
  owner: string,
  repo: string
) {
  const [
    repository,
    setRepository,
  ] =
    useState<RepositoryInfo | null>(
      null
    );

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const data =
          await getRepository(
            owner,
            repo
          );

        setRepository(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (owner && repo) {
      load();
    }
  }, [owner, repo]);

  return {
    repository,
    loading,
  };
}