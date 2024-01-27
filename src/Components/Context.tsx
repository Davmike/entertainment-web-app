import { createContext, useContext } from "react";

interface ComponentsProps {
  showLogin: boolean;
  setShowLogin: (showLogin: boolean) => void;
  showMovie: boolean;
  setShowMovie: (showMovie: boolean) => void;
  showSeries: boolean;
  setShowSeries: (showSeries: boolean) => void;
  data: any;
  setData: (data: any) => void;
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  movie: any;
  setMovie: (movie: any) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
