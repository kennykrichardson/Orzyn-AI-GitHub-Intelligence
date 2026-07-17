import {
  useEffect,
  useState,
} from "react";

import {
  getInsights,
  AIInsightResponse,
} from "../api/insightApi";

export function useInsights(
  owner: string,
  repo: string
) {
  const [
    insights,
    setInsights,
  ] = useState<string[]>([]);

  const [
    summary,
    setSummary,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data:
          AIInsightResponse =
          await getInsights(
            owner,
            repo
          );

        setInsights(
          data.insights || []
        );

        setSummary(
          data.summary || ""
        );
      } catch (
        error
      ) {
        console.error(
          error
        );
      } finally {
        setLoading(false);
      }
    }

    if (!owner || !repo)
      return;

    load();
  }, [owner, repo]);

  return {
    insights,
    summary,
    loading,
  };
}