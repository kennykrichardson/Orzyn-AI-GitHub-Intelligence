import { useEffect, useState } from "react";
import { useRepository } from "../state/repositoryStore";

interface Contributor {
  username: string;
  contributions: number;
}

export default function ContributorsList() {
  const {
    owner,
    repo,
  } = useRepository();

  const [
    contributors,
    setContributors,
  ] = useState<
    Contributor[]
  >([]);

  useEffect(() => {
    async function load() {
      const response =
        await fetch(
          `https://orzyn-api.onrender.com/contributors/${owner}/${repo}`
        );

      const data =
        await response.json();

      setContributors(
  Array.isArray(data)
    ? data
    : []
);
    }

    load();
  }, [owner, repo]);

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
        text-3xl
        font-bold
        mb-6
        "
      >
        Contributors
      </h2>

      <div className="space-y-3">
        {contributors.map(
          (
            contributor,
            index
          ) => (
            <div
              key={index}
              className="
              flex
              justify-between
              border-b
              border-black/10
              pb-3
              "
            >
              <span>
                {
                  contributor.username
                }
              </span>

              <span>
                {
                  contributor.contributions
                }
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}