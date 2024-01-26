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
  savedMovies: any;
  setSavedMovies: any;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
