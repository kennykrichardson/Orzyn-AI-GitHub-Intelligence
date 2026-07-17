import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

interface Snapshot {
  recorded_at: string;
  health_score: number;
  productivity_score: number;
  velocity_score: number;
}

interface Props {
  snapshots: Snapshot[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleString(
    undefined,
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }
  );
}

export default function RecentSnapshotsTable({
  snapshots,
}: Props) {
  const [showModal, setShowModal] =
    useState(false);

  const visibleSnapshots =
    snapshots.slice(0, 3);

  return (
    <>
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
          justify-between
          items-center
          mb-6
          "
        >
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Historical Analysis
          </h2>

          {snapshots.length > 3 && (
            <AnimatedButton
              variant="primary"
              onClick={() =>
                setShowModal(true)
              }
            >
              Show More
            </AnimatedButton>
          )}
        </div>

        <div
          className="
          grid
          xl:grid-cols-3
          md:grid-cols-2
          grid-cols-1
          gap-5
          "
        >
          {visibleSnapshots.map(
            (snapshot) => (
              <div
                key={
                  snapshot.recorded_at
                }
                className="
                bg-[#F8F4EC]
                rounded-2xl
                p-5
                border
                border-gray-200
                "
              >
                <h3
                  className="
                  font-bold
                  text-lg
                  mb-4
                  "
                >
                  {formatDate(
                    snapshot.recorded_at
                  )}
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-gray-500">
                      Health Score
                    </span>
                    <p className="font-bold">
                      {Number(snapshot.health_score ?? 0).toFixed(1)
                      }
                    </p>
                  </div>

                  <div>
                    <span className="text-gray-500">
                      Productivity
                    </span>
                    <p className="font-bold">
                      {Number(snapshot.productivity_score ?? 0).toFixed(1)
                      }
                    </p>
                  </div>

                  <div>
                    <span className="text-gray-500">
                      Velocity
                    </span>
                    <p className="font-bold">
                      {Number(snapshot.velocity_score ?? 0).toFixed(1)
                      }
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {showModal && (
        <div
          className="
          fixed
          inset-0
          z-[100]
          bg-black/50
          backdrop-blur-sm
          flex
          items-center
          justify-center
          p-6
          "
        >
          <div
            className="
            glass
            rounded-3xl
            w-full
            max-w-7xl
            h-[85vh]
            p-8
            overflow-hidden
            "
          >
            <div
              className="
              flex
              justify-between
              items-center
              mb-6
              "
            >
              <h2
                className="
                text-3xl
                font-black
                "
              >
                Historical Analysis
              </h2>

              <AnimatedButton
                variant="primary"
                onClick={() =>
                  setShowModal(false)
                }
              >
                Close
              </AnimatedButton>
            </div>

            <div
              className="
              overflow-y-auto
              h-[calc(100%-80px)]
              "
            >
              <div
                className="
                grid
                xl:grid-cols-3
                md:grid-cols-2
                grid-cols-1
                gap-5
                "
              >
                {snapshots.map(
                  (snapshot) => (
                    <div
                      key={
                        snapshot.recorded_at
                      }
                      className="
                      bg-[#F8F4EC]
                      rounded-2xl
                      p-5
                      border
                      border-gray-200
                      "
                    >
                      <h3 className="font-bold mb-4">
                        {formatDate(
                          snapshot.recorded_at
                        )}
                      </h3>

                      <div className="space-y-3">
                        <p>
                          Health:{" "}
                          <strong>
                            {snapshot.health_score.toFixed(
                              1
                            )}
                          </strong>
                        </p>

                        <p>
                          Productivity:{" "}
                          <strong>
                            {snapshot.productivity_score.toFixed(
                              1
                            )}
                          </strong>
                        </p>

                        <p>
                          Velocity:{" "}
                          <strong>
                            {snapshot.velocity_score.toFixed(
                              1
                            )}
                          </strong>
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}