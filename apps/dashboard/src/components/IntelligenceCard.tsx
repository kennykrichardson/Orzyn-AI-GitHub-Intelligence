interface Props {
  title: string;
  value: string;
  description: string;
}

export default function IntelligenceCard({
  title,
  value,
  description,
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
        text-xl
        font-bold
        "
      >
        {title}
      </h3>

      <div
        className="
        text-4xl

        text-red-600

        font-black

        mt-4
        "
      >
        {value}
      </div>

      <p
        className="
        mt-4

        text-gray-600
        "
      >
        {description}
      </p>
    </div>
  );
}