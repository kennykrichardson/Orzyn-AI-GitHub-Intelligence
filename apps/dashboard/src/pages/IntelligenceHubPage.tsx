import DashboardLayout from "../layout/DashboardLayout";

import ForecastCard from "../components/ForecastCard";
import ForecastChart from "../components/ForecastChart";
import AIRiskRadar from "../components/AIRiskRadar";
import ContributorHeatmap from "../components/ContributorHeatmap";
import InsightsPanel from "../components/InsightsPanel";

import { useAnalytics } from "../hooks/useAnalytics";
import { useRepository } from "../state/repositoryStore";

import Loader from "../components/Loader";

export default function IntelligenceHubPage() {
  const {
    owner,
    repo,
  } = useRepository();

  if (!owner || !repo) {
    return (
      <DashboardLayout>
        <div
          className="
          flex
          items-center
          justify-center
          min-h-[70vh]
          "
        >
          <Loader />
        </div>

        <div
          className="
          flex
          items-center
          justify-center
          font-bold
          text-xl
          "
        >
          Search for a repository...
        </div>
      </DashboardLayout>
    );
  }

  const {
    analytics,
    history,
    loading,
  } = useAnalytics(
    owner,
    repo
  );

  if (loading || !analytics) {
    return (
      <DashboardLayout>
        <div
          className="
          flex
          items-center
          justify-center
          min-h-[70vh]
          "
        >
          <Loader />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1
        className="
        text-3xl
        sm:text-4xl
        md:text-5xl

        font-black

        leading-tight

        mb-8
        "
      >
        Intelligence Hub
      </h1>

      <div
        className="
        grid
        xl:grid-cols-4
        gap-6
        mb-6
        "
      >
        <ForecastCard
          title="Health Forecast"
          value={String(
            Math.round(
              analytics.health_score + 8
            )
          )}
          trend="+ Forecast"
        />

        <ForecastCard
          title="Velocity Forecast"
          value={String(
            Math.round(
              analytics.velocity_score + 5
            )
          )}
          trend="+ Forecast"
        />

        <ForecastCard
          title="Bus Factor"
          value={String(
            analytics.bus_factor
          )}
          trend="Contributor Stability"
        />

        <ForecastCard
          title="Risk Score"
          value={String(
            analytics.risk_score
          )}
          trend="Repository Risk"
        />
      </div>

      <div
        className="
        grid
        xl:grid-cols-2
        gap-6
        mb-6
        "
      >
        <ForecastChart
          history={history}
        />

        <AIRiskRadar
          riskScore={
            analytics.risk_score
          }
          busFactor={
            analytics.bus_factor
          }
        />
      </div>

      <ContributorHeatmap
        contributors={[
          {
            name: "Primary Maintainer",
            commits: Math.round(
              analytics.productivity_score /
                200
            ),
          },

          {
            name: "Core Team",
            commits: Math.round(
              analytics.productivity_score /
                300
            ),
          },

          {
            name: "Contributors",
            commits: Math.round(
              analytics.productivity_score /
                500
            ),
          },
        ]}
      />
    </DashboardLayout>
  );
}