import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Snapshot {
  velocity_score?: number;
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

export default function VelocityChart({
  history = [],
}: Props) {
  const chartData = history
    .slice(-10)
    .map((item) => ({
      date: formatDate(
        item.recorded_at
      ),
      velocity:
        Number(
          item.velocity_score ?? 0
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
        Repository Activity
      </h2>

      <div className="h-[250px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
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

            <Area
              type="monotone"
              dataKey="velocity"
              stroke="#111827"
              fill="#f87171"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}