import DashboardLayout from "../layout/DashboardLayout";

import ReportPreview from "../components/ReportPreview";

import ContributorsList from "../components/ContributorsList";

import Loader from "../components/Loader";

import { useRepository } from "../state/repositoryStore";

import RepositorySearch from "../components/RepositorySearch";

export default function ReportsPage() {
  const { owner, repo } =
    useRepository();

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

  return (
    <DashboardLayout>
      <div className="space-y-10">
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
          Executive Reports
        </h1>

        <ReportPreview />

        <ContributorsList />
      </div>
    </DashboardLayout>
  );
}