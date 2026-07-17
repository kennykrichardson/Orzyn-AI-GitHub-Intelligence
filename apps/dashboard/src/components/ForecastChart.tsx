import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Snapshot {
  health_score?: number;
  productivity_score?: number;
  velocity_score?: number;
}

interface Props {
  history?: Snapshot[];
}

export default function ForecastChart({
  history = [],
}: Props) {
  const latest =
    history[
      history.length - 1
    ] || {};

  const chartData = [
    {
      metric: "Health",
      value:
        Number(
          latest.health_score ??
            0
        ),
    },
    {
      metric: "Productivity",
      value:
        Number(
          latest.productivity_score ??
            0
        ),
    },
    {
      metric: "Velocity",
      value:
        Number(
          latest.velocity_score ??
            0
        ),
    },
  ];

  return (
    <div
      className="
      glass
      rounded-3xl
      shadow-xl
      p-6
      h-[420px]
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-4
        "
      >
        Repository Metrics Breakdown
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={chartData}
          >
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="metric"
            />

            <YAxis
              domain={[0, 100]}
            />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#ef4444"
              radius={[
                8,
                8,
                0,
                0,
              ]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}