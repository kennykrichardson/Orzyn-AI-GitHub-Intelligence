import DashboardLayout from "../layout/DashboardLayout";

import ComparisonRadar from "../components/ComparisonRadar";

import { useAnalytics } from "../hooks/useAnalytics";
import { useContributors } from "../hooks/useContributors";
import { useRepository } from "../state/repositoryStore";
export default function ComparisonPage() {
const {
  owner,
  repo,
} = useRepository();

const { analytics } =
  useAnalytics(owner, repo);

const { contributors } =
  useContributors(owner, repo);

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
        Repository Comparison
      </h1>

      <ComparisonRadar
  health={
    analytics?.health_score ?? 0
  }
  velocity={
    analytics?.velocity_score ?? 0
  }
  risk={
    analytics?.risk_score ?? 0
  }
  contributors={
    contributors.length
  }
/>

    </DashboardLayout>
  );
}