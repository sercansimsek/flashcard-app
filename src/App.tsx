import { useState } from "react";
import { StudyMode } from "./pages/StudyMode/StudyMode";
import { ModeContext, type ActiveMode } from "./utils/ModeContext";

export const App = () => {
  const [activeMode, setActiveMode] = useState<ActiveMode>("study");

  return (
    <ModeContext.Provider value={{ activeMode, setActiveMode }}>
      <div className="App">
        <StudyMode />
      </div>
    </ModeContext.Provider>
  );
};
