import { useEffect, useState } from "react";
import axios from "axios";

interface TrendsResponse {
  productivity_growth: number;
  health_growth: number;
  risk_change: number;

  productivity_trend?: string;
  health_trend?: string;
}

export function useTrends(
  owner: string,
  repo: string
) {
  const [trends, setTrends] =
    useState<TrendsResponse | null>(
      null
    );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!owner || !repo) {
      setTrends(null);
      return;
    }

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const response =
          await axios.get(
            `https://orzyn-api.onrender.com/analytics/trends/${owner}/${repo}`
          );

        const data =
          response.data;

        setTrends({
          productivity_growth:
            data.productivity_growth ??
            0,

          health_growth:
            data.health_growth ??
            0,

          risk_change:
            data.risk_change ?? 0,

          productivity_trend:
            (data
              .productivity_growth ??
              0) > 0
              ? "growing"
              : "stable",

          health_trend:
            (data.health_growth ??
              0) > 0
              ? "growing"
              : "stable",
        });
      } catch (err) {
        console.error(
          "Trends Error:",
          err
        );

        setError(
          "Failed to load trends"
        );

        setTrends(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [owner, repo]);

  return {
    trends,
    loading,
    error,
  };
}