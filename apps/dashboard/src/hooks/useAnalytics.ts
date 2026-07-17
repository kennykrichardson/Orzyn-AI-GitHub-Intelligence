import {
  useEffect,
  useState,
} from "react";

import { toast } from "sonner";

import {
  AnalyticsData,
  Snapshot,
} from "../types/analytics";

import {
  getAnalytics,
  getHistory,
} from "../api/analyticsApi";

export function useAnalytics(
  owner: string,
  repo: string
) {
  const [
    analytics,
    setAnalytics,
  ] =
    useState<AnalyticsData | null>(
      null
    );

  const [
    history,
    setHistory,
  ] =
    useState<Snapshot[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const analyticsData =
          await getAnalytics(
            owner,
            repo
          );

        setAnalytics(
          analyticsData
        );

        try {
          const historyData =
            await getHistory(
              owner,
              repo
            );

          setHistory(
            historyData
          );
        } catch {
          console.warn(
            "History endpoint unavailable"
          );

          setHistory([]);
        }
} catch (error: any) {
  console.error(
    "Analytics Error:",
    error
  );

  const message =
    error?.message ?? "";

  if (
    message.includes("404")
  ) {
    toast.error(
      "Repository not found. Verify the owner and repository name."
    );
  } else if (
    message.includes("403")
  ) {
    toast.error(
      "GitHub API rate limit reached. Try again later."
    );
  } else {
    toast.error(
      "Failed to analyze repository. Verify the Owner/Repository name."
    );
  }

  setAnalytics(null);
  setHistory([]);
} finally {
        setLoading(false);
      }
    }

    if (!owner || !repo) {
      setAnalytics(null);
      setHistory([]);
      setLoading(false);
      return;
    }

    load();
  }, [owner, repo]);

  return {
    analytics,
    history,
    loading,
  };
}