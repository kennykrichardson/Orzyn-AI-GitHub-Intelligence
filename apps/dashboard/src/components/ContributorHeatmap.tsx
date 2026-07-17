interface Contributor {
  name: string;
  commits: number;
}

interface Props {
  contributors: Contributor[];
}

export default function ContributorHeatmap({
  contributors,
}: Props) {
  const max =
    Math.max(
      ...contributors.map(
        (c) => c.commits
      )
    );

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Contributor Heatmap
      </h2>

      <div className="space-y-4">
        {contributors.map(
          (contributor) => (
            <div
              key={
                contributor.name
              }
            >
              <div
                className="
                flex
                justify-between
                mb-1
                "
              >
                <span>
                  {contributor.name}
                </span>

                <span>
                  {
                    contributor.commits
                  }
                </span>
              </div>

              <div
                className="
                h-3
                bg-black/10
                rounded-full
                "
              >
                <div
                  className="
                  h-full
                  rounded-full
                  bg-red-500
                  "
                  style={{
                    width: `${
                      (contributor.commits /
                        max) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}