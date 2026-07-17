import { useRepository } from "../state/repositoryStore";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ReactMarkdown from "react-markdown";

interface ReportResponse {
  repository: {
    id: number;
    name: string;
    owner: string;
    language: string;
    stars: number;
  };

  metrics: {
    productivity_score: number;
    velocity_score: number;
    bus_factor: number;
    risk_score: number;
    health_score: number;
  };

  report: {
    summary: string;
    insights: string[];
    risk_assessment?: string;
    roadmap?: string;
  };
}

export default function ReportPreview() {
  const { owner, repo } = useRepository();

  const [reportData, setReportData] =
    useState<ReportResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadReport() {
      try {
        setLoading(true);

        const response =
          await fetch(
            `https://orzyn-api.onrender.com/reports/${owner}/${repo}`
          );

        const data =
          (await response.json()) as ReportResponse;

        setReportData(data);
      } catch (error) {
        console.error(
          "Report Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    if (owner && repo) {
      loadReport();
    }
  }, [owner, repo]);

  if (loading) {
    return (
      <div className="glass rounded-3xl shadow-xl p-8">
        <Loader />
      </div>
    );
  }

  if (!reportData) {
    return (
      <div className="glass rounded-3xl shadow-xl p-8">
        Failed to load report.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="glass rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-black mb-8">
          AI Executive Summary
        </h2>

        <div
  className="
  prose
  prose-lg
  max-w-none
  prose-headings:font-black
  prose-headings:text-black
  prose-p:text-gray-700
  prose-li:text-gray-700
  "
>
  <ReactMarkdown>
    {reportData.report.summary}
  </ReactMarkdown>
</div>
      </div>

      {reportData.report.risk_assessment && (
        <div className="glass rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-black mb-8">
            AI Risk Assessment
          </h2>

          <div
  className="
  prose
  prose-lg
  max-w-none
  prose-headings:font-black
  prose-headings:text-black
  prose-p:text-gray-700
  prose-li:text-gray-700
  "
>
  <ReactMarkdown>
    {reportData.report.risk_assessment}
  </ReactMarkdown>
</div>
        </div>
      )}

      {reportData.report.roadmap && (
        <div className="glass rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-black mb-8">
            AI Improvement Roadmap
          </h2>

          <div
  className="
  prose
  prose-lg
  max-w-none
  prose-headings:font-black
  prose-headings:text-black
  prose-p:text-gray-700
  prose-li:text-gray-700
  "
>
  <ReactMarkdown>
    {reportData.report.roadmap}
  </ReactMarkdown>
</div>
        </div>
      )}

      <div className="glass rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-black mb-6">
          Repository Metrics
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          <Metric
            title="Health"
            value={
              reportData.metrics.health_score
            }
          />

          <Metric
            title="Productivity"
            value={
              reportData.metrics
                .productivity_score
            }
          />

          <Metric
            title="Velocity"
            value={
              reportData.metrics.velocity_score
            }
          />

          <Metric
            title="Risk"
            value={
              reportData.metrics.risk_score
            }
          />

          <Metric
            title="Bus Factor"
            value={
              reportData.metrics.bus_factor
            }
          />
        </div>
      </div>

      <div className="glass rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-black mb-6">
          Engineering Insights
        </h2>

        <div className="space-y-4">
          {reportData.report.insights.map(
            (insight, index) => (
              <div
                key={index}
                className="
                glass
                rounded-2xl
                p-5
                leading-7
                "
              >
                {insight}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-gray-500">
        {title}
      </p>

      <p className="text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}