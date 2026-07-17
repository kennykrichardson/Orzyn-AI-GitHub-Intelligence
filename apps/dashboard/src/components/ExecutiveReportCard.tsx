interface Props {
  title: string;
  description: string;
}

export default function ExecutiveReportCard({
  title,
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
        text-2xl

        font-bold
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-3

        text-gray-600
        "
      >
        {description}
      </p>

      <button
        className="
        mt-5

        bg-red-600

        text-white

        px-5
        py-3

        rounded-xl
        "
      >
        Generate
      </button>
    </div>
  );
}