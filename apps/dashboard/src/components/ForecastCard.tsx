interface Props {
  title: string;
  value: string;
  trend: string;
}

export default function ForecastCard({
  title,
  value,
  trend,
}: Props) {
  return (
    <div
      className="
      glass

      rounded-3xl

      p-6

      shadow-xl
      "
    >
      <h3
        className="
        text-lg

        font-semibold
        "
      >
        {title}
      </h3>

      <div
        className="
        text-5xl

        font-black

        text-red-600

        mt-4
        "
      >
        {value}
      </div>

      <p
        className="
        mt-3

        text-gray-500
        "
      >
        {trend}
      </p>
    </div>
  );
}