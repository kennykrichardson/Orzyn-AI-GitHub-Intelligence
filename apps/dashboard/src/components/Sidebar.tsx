import {
  X,
  LayoutDashboard,
  GitCompare,
  Brain,
  FileText,
  Activity,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { FaGithub,FaLinkedin } from "react-icons/fa";
import richardsonLogo from "../assets/richardson-tech.png";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (
    value: boolean
  ) => void;
}

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    label: "Compare",
    path: "/comparison",
    icon: GitCompare,
  },

  {
    label: "Intelligence",
    path: "/intelligence",
    icon: Brain,
  },

  {
    label: "Reports",
    path: "/reports",
    icon: FileText,
  },
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}: SidebarProps) {
  const location =
    useLocation();

  return (
    <>
      {!isOpen && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            setIsOpen(true)
          }
className="
fixed

-top-1
-left-1

z-[60]

w-12
h-12

bg-[#CC3536]

text-white

shadow-xl

rounded-none
rounded-br-xl

flex
items-center
justify-center
"
        >
          <div className="flex flex-col gap-[5px]">
  <div
    className="
    w-7
    h-[3px]
    bg-[#292323]
    rounded-full
    "
  />

    <div
    className="
    w-7
    h-[3px]
    bg-[#292323]
    rounded-full
    "
  />

  <div
    className="
    w-5
    h-[3px]
    bg-[#292323]
    rounded-full
    "
  />
</div>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
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
              onClick={() =>
                setIsOpen(false)
              }
              className="
              fixed
              inset-0

              bg-black/50

              backdrop-blur-sm

              z-40
              "
            />

            <motion.aside
              initial={{
                x: -350,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -350,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="
              fixed

              top-0
              left-0
              bottom-0

              w-[320px]

              bg-[#100C08]

              z-50

              flex
              flex-col
              "
            >
              {/* Header */}

              <div
                className="
                px-8
                py-8

                border-b

                border-white/10
                "
              >
                <div
                  className="
                  flex
                  items-start
                  justify-between
                  "
                >
                  <div>
                    <h1
                      className="
                      text-4xl

                      font-black

                      text-red-500

                      leading-none
                      "
                    >
                      Orzyn AI
                    </h1>

                    <p
                      className="
                      text-gray-500

                      mt-3
                      "
                    >
                      An App by Kenny Richardson
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className="
                    text-white

                    hover:text-red-400

                    transition-colors
                    "
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}

              <div
                className="
                flex-1

                flex
                flex-col

                overflow-y-auto
                hide-scrollbar

                px-5
                py-6
                "
              >
                {/* Navigation */}

                <div
                  className="
                  space-y-3
                  "
                >
                  {menuItems.map(
                    (item) => {
                      const Icon =
                        item.icon;

                      const active =
                        location.pathname ===
                        item.path;

                      return (
                        <Link
                          key={
                            item.label
                          }
                          to={
                            item.path
                          }
                          onClick={() =>
                            setIsOpen(
                              false
                            )
                          }
                          className={`
                          flex
                          items-center

                          gap-4

                          px-5
                          py-4

                          rounded-2xl

                          transition-all

                          ${
                            active
                              ? `
                              bg-red-600

                              text-white

                              shadow-lg
                              `
                              : `
                              glass/[0.03]

                              text-gray-300

                              hover:bg-red-500/[0.10]

                              ease-in-out

                              hover:text-gray-500
                              `
                          }
                          `}
                        >
                          <Icon
                            size={20}
                          />

                          <span
                            className="
                            font-medium
                            "
                          >
                            {
                              item.label
                            }
                          </span>
                        </Link>
                      );
                    }
                  )}
                </div>

                {/* Creator Details */}

<div
  className="
  glass
  rounded-3xl
  p-5
  mt-6
  border
  border-white/20
  shadow-lg
  "
>
  <div
    className="
    flex
    flex-col
    items-center
    text-center
    "
  >
    <img
      src={richardsonLogo}
      alt="Richardson Tech"
      className="
      w-15
      h-15
      mb-4
      "
    />

    <h3
      className="
      text-md
      font-bold
      "
    >
      Kenny Richardson Kodipally
    </h3>

    <p
      className="
      text-sm
      text-gray-500
      mb-4
      "
    >
      Creator • Orzyn AI
    </p>

    <p
      className="
      text-xs
      leading-5
      text-gray-600
      mb-5
      "
    >
    AI-powered Developer Intelligence Platform
    </p>
<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
    <a
      href="https://github.com/kennykrichardson"
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      border
      border-gray-200
      hover:border-red-500
      hover:text-red-500
      transition-all
      duration-300
      "
    >
      <FaGithub size={18} />
    </a>
      <a
      href="https://www.linkedin.com/in/kenny-richardson-kodipally-250501217"
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      border
      border-gray-200
      hover:border-red-500
      hover:text-red-500
      transition-all
      duration-300
      "
    >
      <FaLinkedin size={18} />
    </a>
   </div>

    <div
      className="
      mt-5
      pt-4
      border-t
      border-gray-200
      w-full
      text-center
      "
    >
      <p
        className="
        text-xs
        text-gray-500
        "
      >
        Orzyn AI v1.0
      </p>
    </div>
  </div>
</div>
                </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}