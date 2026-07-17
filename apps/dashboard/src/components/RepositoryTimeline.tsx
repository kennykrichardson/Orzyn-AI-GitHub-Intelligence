import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

interface Snapshot {
  recorded_at: string;
  health_score: number;
}

interface Props {
  history?: Snapshot[];
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

export default function RepositoryTimeline({
  history = [],
}: Props) {
  const [showModal, setShowModal] =
    useState(false);

  const events =
    history.slice(0, 3);

  return (
    <>
      <div
        className="
        glass
        rounded-3xl
        shadow-xl
        p-6
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
            Repository Timeline
          </h2>

          {history.length > 3 && (
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

        <div className="space-y-5">
          {events.map(
            (event, index) => (
              <div
                key={index}
                className="
                flex
                gap-4
                "
              >
                <div
                  className="
                  w-3
                  h-3
                  rounded-full
                  bg-red-500
                  mt-2
                  "
                />

                <div>
                  <p className="font-semibold">
                    Repository Analyzed
                  </p>

<p className="text-sm text-gray-500">
  Health Score:{" "}
  {Number(
    event.health_score ?? 0
  ).toFixed(1)}
</p>

                  <p className="text-sm text-gray-500">
                    {formatDate(
                      event.recorded_at
                    )}
                  </p>
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
            max-w-5xl
            h-[80vh]
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
              <h2 className="text-3xl font-black">
                Repository Timeline
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
              space-y-5
              "
            >
              {history.map(
                (event, index) => (
                  <div
                    key={index}
                    className="
                    flex
                    gap-4
                    "
                  >
                    <div
                      className="
                      w-3
                      h-3
                      rounded-full
                      bg-red-500
                      mt-2
                      "
                    />

                    <div>
                      <p className="font-semibold">
                        Repository Analyzed
                      </p>

<p className="text-sm text-gray-500">
  Health Score:{" "}
  {Number(
    event.health_score ?? 0
  ).toFixed(1)}
</p>

                      <p className="text-sm text-gray-500">
                        {formatDate(
                          event.recorded_at
                        )}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}