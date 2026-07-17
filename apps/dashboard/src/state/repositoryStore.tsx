import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface RepositoryContextType {
  owner: string;

  repo: string;

  setOwner: (
    value: string
  ) => void;

  setRepo: (
    value: string
  ) => void;
}

const RepositoryContext =
  createContext<
    RepositoryContextType
  >(
    {} as RepositoryContextType
  );

export function RepositoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    owner,
    setOwner,
  ] =
    useState("");

  const [
    repo,
    setRepo,
  ] = useState("");

  return (
    <RepositoryContext.Provider
      value={{
        owner,
        repo,
        setOwner,
        setRepo,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepository() {
  return useContext(
    RepositoryContext
  );
}