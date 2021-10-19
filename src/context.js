import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const [isDesktop, setIsDesktop] = useState(false);

  const checkIsDesktop = () => {
    let width = window.innerWidth;
    if (width > 780) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 780) {
      setIsDesktop(true);
    }
    window.addEventListener("resize", checkIsDesktop);
  }, [isDesktop]);

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
    <AppContext.Provider value={{ theme, changeTheme, isDesktop }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
