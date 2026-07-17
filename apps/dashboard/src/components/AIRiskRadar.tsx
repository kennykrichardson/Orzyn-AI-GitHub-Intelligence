interface Props {
  riskScore: number;
  busFactor: number;
}

export default function AIRiskRadar({
  riskScore,
  busFactor,
}: Props) {
  const level =
    riskScore >= 70
      ? "HIGH"
      : riskScore >= 40
      ? "MODERATE"
      : "LOW";

  const color =
    riskScore >= 70
      ? "text-red-500"
      : riskScore >= 40
      ? "text-yellow-500"
      : "text-green-500";

  const explanation =
    riskScore >= 70
      ? "Repository continuity risk is elevated. Additional maintainers are recommended."
      : riskScore >= 40
      ? "Repository risk is manageable but contributor concentration should be monitored."
      : "Repository risk appears stable and acceptable for current activity levels.";

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      shadow-xl
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        "
      >
        AI Risk Radar
      </h2>

      <div className="mt-6">
        <div className="text-gray-500">
          Risk Level
        </div>

        <div
          className={`
          text-5xl
          font-black
          ${color}
          `}
        >
          {level}
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <div>
          Risk Score:
          {" "}
          <strong>
            {riskScore}
          </strong>
        </div>

        <div>
          Bus Factor:
          {" "}
          <strong>
            {busFactor}
          </strong>
        </div>
      </div>

      <div
        className="
        mt-8
        rounded-2xl
        bg-black/5
        p-4
        text-gray-700
        leading-relaxed
        "
      >
        {explanation}
      </div>
    </div>
  );
}