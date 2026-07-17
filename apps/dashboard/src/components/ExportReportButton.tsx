import AnimatedButton from "./AnimatedButton";

import { useAnalytics } from "../hooks/useAnalytics";
import { useContributors } from "../hooks/useContributors";
import { useInsights } from "../hooks/useInsights";
import { useRepositoryInfo } from "../hooks/useRepositoryInfo";

import { useRepository } from "../state/repositoryStore";

export default function ExportReportButton() {
  const {
    owner,
    repo,
  } = useRepository();

  const {
    analytics,
    history,
  } = useAnalytics(
    owner,
    repo
  );

  const {
    contributors,
  } = useContributors(
    owner,
    repo
  );

  const {
    repository,
  } = useRepositoryInfo(
    owner,
    repo
  );

  const {
    summary,
    insights,
  } = useInsights(
    owner,
    repo
  );

  const exportJson = () => {
    const data = {
      exportedAt:
        new Date().toISOString(),

      repository: {
        owner,
        repo,
        name:
          repository?.name,
        description:
          repository?.description,
        language:
          repository?.language,
        stars:
          repository?.stars,
      },

      metrics: {
        health:
          analytics?.health_score,

        productivity:
          analytics?.productivity_score,

        velocity:
          analytics?.velocity_score,

        risk:
          analytics?.risk_score,

        busFactor:
          analytics?.bus_factor,
      },

      ai: {
        summary,
        insights,
      },

      contributors,

      history,
    };

    const blob =
      new Blob(
        [
          JSON.stringify(
            data,
            null,
            2
          ),
        ],
        {
          type:
            "application/json",
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const a =
      document.createElement(
        "a"
      );

    a.href = url;

    a.download =
      `${repo}-report.json`;

    a.click();

    URL.revokeObjectURL(
      url
    );
  };

  return (
    <AnimatedButton
      variant="primary"
      onClick={exportJson}
    >
      EXPORT REPORT
    </AnimatedButton>
  );
}