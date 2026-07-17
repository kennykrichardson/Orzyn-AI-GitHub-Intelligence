import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashboardMobile({
  children,
}: Props) {
  return (
    <div
      className="
      w-full

      px-3
      sm:px-4
      md:px-6
      lg:px-8

      pb-8

      space-y-6

      overflow-x-hidden
      "
    >
      {children}
    </div>
  );
}