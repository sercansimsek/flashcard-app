import "./header.scss";

import logoSm from "../../assets/images/logo-small.svg";
import { useContext } from "react";

import { ModeContext } from "../../utils/ModeContext";

export const Header = () => {
  const modeContext = useContext(ModeContext);

  if (modeContext === null) {
    throw new Error("Header must be rendered inside ModeContext.Provider");
  }

  const { activeMode, setActiveMode } = modeContext;
  return (
    <header className="header">
      <img src={logoSm} alt="Logo icon" className="header-logo" />
      <div className="header-modes">
        <button
          className={activeMode === "study" ? "header-modes_btn" : "inactive"}
          onClick={() => setActiveMode("study")}
          aria-pressed={activeMode === "study"}
        >
          Study Mode
        </button>
        <button
          className={
            activeMode === "allCards" ? "header-modes_btn" : "inactive"
          }
          onClick={() => setActiveMode("allCards")}
          aria-pressed={activeMode === "allCards"}
        >
          All Cards
        </button>
      </div>
    </header>
  );
};
