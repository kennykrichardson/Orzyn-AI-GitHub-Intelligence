interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div
      className="
      glass

      rounded-3xl

      p-8

      text-center
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

      <p
        className="
        mt-3

        text-gray-500
        "
      >
        {description}
      </p>
    </div>
  );
}