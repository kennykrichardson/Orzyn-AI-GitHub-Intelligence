import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function HoverCard({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}