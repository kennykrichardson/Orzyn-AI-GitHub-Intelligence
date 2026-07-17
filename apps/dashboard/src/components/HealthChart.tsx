import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Snapshot {
  health_score?: number;
  recorded_at?: string;
}

interface Props {
  history?: Snapshot[];
}

function formatDate(date?: string) {
  if (!date) return "";

  return new Date(date).toLocaleDateString(
    undefined,
    {
      month: "short",
      day: "numeric",
    }
  );
}

export default function HealthChart({
  history = [],
}: Props) {
  const chartData = history
    .slice(-10)
    .map((item) => ({
      date: formatDate(
        item.recorded_at
      ),
      health:
        Number(
          item.health_score ?? 0
        ),
    }));

  return (
    <div
      className="
      glass
      rounded-3xl
      shadow-xl
      p-6
      h-[340px]
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-4
        "
      >
        Repository Health Trend
      </h2>

      <div className="h-[250px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={chartData}
          >
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="date"
            />

            <YAxis
              domain={[0, 100]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="health"
              stroke="#ef4444"
              strokeWidth={3}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}