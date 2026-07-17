interface Props {
  insights: string[];
}

import EmptyState from "./EmptyState";

export default function InsightsPanel({
  insights,
}: Props) {
  if (
    !insights ||
    insights.length === 0
  ) {
    return (
      <EmptyState
        title="No Intelligence Available"
        description="
        Analyze a repository
        to generate AI-powered
        engineering insights.
        "
      />
    );
  }

  const getColor = (
    insight: string
  ) => {
    const text =
      insight.toLowerCase();

    if (
      text.includes("risk") ||
      text.includes("warning")
    ) {
      return "bg-red-500";
    }

    if (
      text.includes("health") ||
      text.includes("improve")
    ) {
      return "bg-yellow-500";
    }

    return "bg-green-500";
  };

  return (
    <div
      className="
      glass
      rounded-3xl
      shadow-xl
      p-8
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        mb-8
        "
      >
        <div>
          <h2
            className="
            text-3xl
            font-black
            "
          >
            AI Insights
          </h2>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            Engineering observations,
            repository intelligence,
            and improvement signals.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {insights.map(
          (
            insight,
            index
          ) => (
            <div
              key={index}
              className="
              flex
              items-start
              gap-4

              p-5

              rounded-2xl

              bg-black/5

              hover:bg-black/10

              transition-all
              "
            >
              <div
                className={`
                h-3
                w-3

                rounded-full

                mt-2

                ${getColor(
                  insight
                )}
                `}
              />

              <div className="flex-1">
                <div
                  className="
                  text-sm
                  uppercase
                  tracking-wider
                  text-gray-500
                  mb-2
                  "
                >
                  Insight #{index + 1}
                </div>

                <p
                  className="
                  text-gray-700
                  leading-relaxed
                  "
                >
                  {insight}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}