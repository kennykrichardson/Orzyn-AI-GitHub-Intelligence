interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
}

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function MetricCard({
  title,
  value,
  subtitle,
}: MetricCardProps) {
  const numericValue =
    Number(value);

  const getColor = () => {
    if (
      title
        .toLowerCase()
        .includes("risk")
    ) {
      if (numericValue >= 70)
        return "text-red-500";

      if (numericValue >= 40)
        return "text-yellow-500";

      return "text-green-500";
    }

    if (numericValue >= 70)
      return "text-green-500";

    if (numericValue >= 40)
      return "text-yellow-500";

    return "text-red-500";
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      glass/75
      backdrop-blur-md
      rounded-3xl
      p-6
      border
      border-white
      shadow-xl
      transition-all
      "
    >
      <div className="text-gray-500">
        {title}
      </div>

      <div
        className={`
        text-5xl
        font-black
        mt-4
        ${getColor()}
        `}
      >
        <CountUp
          end={numericValue}
          duration={1.4}
        />
      </div>

      <div
        className="
        font-semibold
        mt-4
        text-gray-500
        "
      >
        {subtitle}
      </div>
    </motion.div>
  );
}