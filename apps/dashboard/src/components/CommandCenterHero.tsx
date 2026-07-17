import AnimatedButton from "./AnimatedButton";
import ExportReportButton from "./ExportReportButton";

interface CommandCenterHeroProps {
  healthScore: number;
  velocityScore: number;
  busFactor: number;
  riskScore: number;
}

export default function CommandCenterHero({
  healthScore,
  velocityScore,
  busFactor,
  riskScore,
}: CommandCenterHeroProps) {
  const riskLabel =
    riskScore >= 70
      ? "HIGH"
      : riskScore >= 40
      ? "MODERATE"
      : "LOW";

  return (
    <div
      className="
      relative
      mb-8
      rounded-3xl
      overflow-hidden

      bg-gradient-to-r
      from-[#0A0A0A]
      via-[#161616]
      to-[#1F1F1F]

      text-white
      shadow-2xl
      "
    >
      <div
        className="
        absolute
        top-0
        right-0

        w-[250px]
        h-[250px]

        md:w-[500px]
        md:h-[500px]

        rounded-full

        bg-red-500/10

        blur-[80px]
        "
      />

      <div
        className="
        p-6
        md:p-10

        relative
        z-10
        "
      >
        <div
          className="
          inline-flex
          px-4
          py-2
          rounded-full

          bg-red-600/20
          border
          border-red-500/30

          text-red-300
          text-sm
          "
        >
          AI-Powered Engineering Intelligence
        </div>

<h1
  className="
  mt-5

  text-4xl
  md:text-5xl
  xl:text-7xl

  font-black

  leading-tight
  "
>
          Repository Command Center
        </h1>

        <p
          className="
          mt-4
          text-zinc-400
          max-w-full
          md:max-w-3xl
          "
        >
          Analyze repository health,
          contributor resilience,
          engineering velocity,
          development risk,
          and AI-generated recommendations.
        </p>

        <div
className="
grid

grid-cols-2
md:grid-cols-4

gap-6

mt-10
"
        >
          <div>
            <div className="text-zinc-500">
              Health
            </div>

            <div
              className="
              text-3xl
              md:text-5xl
              font-black
              text-green-400
              "
            >
              {Math.round(
                healthScore
              )}
            </div>
          </div>

          <div>
            <div className="text-zinc-500">
              Velocity
            </div>

            <div
              className="
              text-3xl
              md:text-5xl
              font-black
              "
            >
              {Math.round(
                velocityScore
              )}
            </div>
          </div>

          <div>
            <div className="text-zinc-500">
              Bus Factor
            </div>

            <div
              className="
              text-3xl
              md:text-5xl
              font-black
              "
            >
              {busFactor}
            </div>
          </div>

          <div>
            <div className="text-zinc-500">
              Risk
            </div>

            <div
              className="
              text-3xl
              md:text-5xl
              font-black
              text-yellow-400
              "
            >
              {riskLabel}
            </div>
          </div>
        </div>

        <div
          className="
          flex

          flex-col
          sm:flex-row

          gap-4

          mt-10
          "
        >
          <AnimatedButton variant="primary">
            Analyze Repository
          </AnimatedButton>

          <AnimatedButton variant="secondary">
            Compare Repository
          </AnimatedButton>

          <ExportReportButton />
        </div>
      </div>
    </div>
  );
}