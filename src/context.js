import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const changeTheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
      document.body.style.background = "hsl(236, 33%, 92%)";
    } else {
      setTheme("Dark");
      document.body.style.background = "hsl(235, 21%, 11%)";
    }
  };

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
