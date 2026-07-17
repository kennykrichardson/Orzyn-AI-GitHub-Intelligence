import { X } from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ScoreGuideModal({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={onClose}
          className="
          fixed
          inset-0
          z-[100]

          flex
          items-center
          justify-center

          bg-black/50

          backdrop-blur-sm

          p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.1,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
            glass
            bg-white

            rounded-3xl

            shadow-2xl

            w-full
            max-w-2xl

            max-h-[90vh]

            overflow-y-auto

            p-6
            md:p-8

            relative
            "
          >
            <button
              onClick={onClose}
              className="
              absolute
              top-4
              right-4

              p-2

              rounded-full

              hover:bg-gray-100

              transition-all
              "
            >
              <X size={20} />
            </button>

            <h2
              className="
              text-2xl
              md:text-3xl

              font-black

              mb-6
              "
            >
              Repository Score Guide
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">
                  Health Score
                </h3>

                <p className="text-gray-600 mt-2">
                  Measures overall repository
                  quality including activity,
                  maintainability,
                  contributor participation,
                  documentation quality,
                  and engineering practices.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Productivity Score
                </h3>

                <p className="text-gray-600 mt-2">
                  Measures development output,
                  contribution frequency,
                  commit activity,
                  and engineering momentum.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Velocity Score
                </h3>

                <p className="text-gray-600 mt-2">
                  Measures development speed,
                  delivery consistency,
                  and repository growth trends.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Risk Score
                </h3>

                <p className="text-gray-600 mt-2">
                  Measures sustainability risk,
                  contributor concentration,
                  project activity,
                  maintainability concerns,
                  and engineering stability.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Bus Factor
                </h3>

                <p className="text-gray-600 mt-2">
                  Represents the number of
                  contributors whose departure
                  would significantly affect
                  the project's future
                  development.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}