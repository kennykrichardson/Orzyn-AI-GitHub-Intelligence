import { Bell } from "lucide-react";
import RepositorySearch from "./RepositorySearch";

export default function Topbar() {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      mx-auto
      w-full
      mb-8

      "
    >
      <RepositorySearch />

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        
      </div>
    </div>
  );
}