interface RepositoryHeaderProps {
  name: string;
  owner: string;
  description: string;
  language: string;
  stars: number;
}

export default function RepositoryHeader({
  name,
  owner,
  description,
  language,
  stars,
}: RepositoryHeaderProps) {
  return (
    <div
      className="
      rounded-3xl

      p-5
      md:p-8

      mb-8

      bg-gradient-to-r
      from-[#A41720]
      to-[#DC143C]

      text-white

      shadow-2xl

      overflow-hidden
      "
    >
      <div
        className="
        flex

        flex-col
        md:flex-row

        gap-6

        md:justify-between
        md:items-center
        "
      >
        <div className="min-w-0 flex-1">
          <p
            className="
            text-red-100
            text-sm
            md:text-base
            "
          >
            Repository Overview
          </p>

          <h1
            className="
            mt-2

            text-2xl
            md:text-4xl
            lg:text-5xl

            font-bold

            break-words

            leading-tight
            "
          >
            {owner}/{name}
          </h1>

          <p
            className="
            mt-4

            text-red-100

            text-sm
            md:text-base

            max-w-full
            md:max-w-2xl

            break-words

            leading-relaxed
            "
          >
            {description}
          </p>

          <div
            className="
            mt-4

            inline-flex

            items-center

            rounded-full

            bg-white/20

            px-4
            py-2

            text-sm
            font-medium
            "
          >
            {language}
          </div>
        </div>

        <div
          className="
          self-start
          md:self-auto

          backdrop-blur-md

          rounded-2xl

          px-5
          py-4

          bg-white/10

          min-w-[90px]

          text-center

          shrink-0
          "
        >
          <div
            className="
            text-sm
            text-red-100
            "
          >
            Stars
          </div>

          <div
            className="
            text-2xl
            md:text-3xl

            font-bold
            "
          >
            {stars.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}