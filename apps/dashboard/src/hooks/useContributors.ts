import {
  useEffect,
  useState,
} from "react";

interface Contributor {
  username: string;
  contributions: number;
}

export function useContributors(
  owner: string,
  repo: string
) {
  const [
    contributors,
    setContributors,
  ] = useState<
    Contributor[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const response =
          await fetch(
            `https://orzyn-api.onrender.com/contributors/${owner}/${repo}`
          );

        const data =
          await response.json();

        setContributors(data);
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
    contributors,
    loading,
  };
}