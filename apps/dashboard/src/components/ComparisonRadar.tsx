import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface Props {
  health: number;
  velocity: number;
  risk: number;
  contributors: number;
}

export default function ComparisonRadar({
  health,
  velocity,
  risk,
  contributors,
}: Props) {
  const chartData = [
    {
      metric: "Health",
      value: health,
    },
    {
      metric: "Velocity",
      value: velocity,
    },
    {
      metric: "Risk",
      value: risk,
    },
    {
      metric: "Contributors",
      value: contributors,
    },
  ];

  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
      shadow-xl
      "
    >
      <h2
        className="
        text-3xl
        font-black
        mb-8
        "
      >
        Repository Intelligence Radar
      </h2>

      <div className="h-[500px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <RadarChart
            data={chartData}
          >
            <PolarGrid />

            <PolarAngleAxis
              dataKey="metric"
            />

            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
            />

            <Radar
              dataKey="value"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div
        className="
        grid
        md:grid-cols-4
        gap-4
        mt-8
        "
      >
        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Health
          </p>

          <p className="text-2xl font-bold">
            {health}
          </p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Velocity
          </p>

          <p className="text-2xl font-bold">
            {velocity}
          </p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Risk
          </p>

          <p className="text-2xl font-bold">
            {risk}
          </p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Contributors
          </p>

          <p className="text-2xl font-bold">
            {contributors}
          </p>
        </div>
      </div>
    </div>
  );
}