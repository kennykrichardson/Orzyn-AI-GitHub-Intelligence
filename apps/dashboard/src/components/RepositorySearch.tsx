import { useState } from "react";
import { CircleAlert } from "lucide-react";

import AnimatedButton from "./AnimatedButton";
import ScoreGuideModal from "./ScoreGuideModal";

import { useRepository } from "../state/repositoryStore";

export default function RepositorySearch() {
  const {
    owner,
    repo,
    setOwner,
    setRepo,
  } = useRepository();

  const [localOwner, setLocalOwner] =
    useState(owner);

  const [localRepo, setLocalRepo] =
    useState(repo);

  const [
    showGuide,
    setShowGuide,
  ] = useState(false);

  function analyzeRepository() {
    const trimmedOwner =
      localOwner.trim();

    const trimmedRepo =
      localRepo.trim();

    if (
      !trimmedOwner ||
      !trimmedRepo
    ) {
      return;
    }

    setOwner(trimmedOwner);
    setRepo(trimmedRepo);

    console.log(
      "Analyzing:",
      trimmedOwner,
      trimmedRepo
    );
  }

  return (
    <>
      <div
        className="
        glass
        rounded-3xl
        shadow-xl
        w-full
        mb-6
        px-4
        md:px-8
        py-5
        "
      >
        <div
          className="
          flex
          flex-col
          xl:flex-row
          gap-5
          "
        >
          <div
            className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            gap-3
            flex-1
            "
          >
            <span
              className="
              font-bold
              text-lg
              whitespace-nowrap
              "
            >
              Owner:
            </span>

            <input
              value={localOwner}
              onChange={(e) =>
                setLocalOwner(
                  e.target.value
                )
              }
              placeholder="Ex: kennykrichardson"
              className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-gray-200
              bg-white
              "
            />
          </div>

          <div
            className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            gap-3
            flex-1
            "
          >
            <span
              className="
              font-bold
              text-lg
              whitespace-nowrap
              "
            >
              Repo:
            </span>

            <input
              value={localRepo}
              onChange={(e) =>
                setLocalRepo(
                  e.target.value
                )
              }
              placeholder="Ex: GeoTrail"
              className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-gray-200
              bg-white
              "
            />
          </div>

          <div
            className="
            flex
            items-center
            justify-center
            gap-3
            w-full
            xl:w-auto
            "
          >
            <AnimatedButton
              variant="primary"
              onClick={
                analyzeRepository
              }
            >
              ANALYZE REPOSITORY
            </AnimatedButton>

            <button
              type="button"
              onClick={() =>
                setShowGuide(
                  true
                )
              }
              className="
              flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              border
              border-red-200
              bg-white
              hover:bg-red-50
              transition-all
              "
            >
              <CircleAlert
                size={22}
                className="
                text-red-500
                "
              />
            </button>
          </div>
        </div>
      </div>

      <ScoreGuideModal
        open={showGuide}
        onClose={() =>
          setShowGuide(false)
        }
      />
    </>
  );
}