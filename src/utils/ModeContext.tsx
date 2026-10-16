import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type ActiveMode = "study" | "allCards";

type ModeContextValue = {
  activeMode: ActiveMode;
  setActiveMode: Dispatch<SetStateAction<ActiveMode>>;
};

export const ModeContext = createContext<ModeContextValue | null>(null);
