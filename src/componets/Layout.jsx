import NavBar from "./navBar/NavBar";
import LeftBar from "./leftBar/LeftBar";
import RightBar from "./rightBar/RightBar";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../context/darkModeContext";

const Layout = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  //console.log("Dark Mode value from Layout", isDarkMode);
  return (
    <div className={!isDarkMode ? "theme-light" : "theme-dark"}>
      {/* <NavBar isDarkMode={isDarkMode} darkModeToggle={darkModeToggle} /> */}
      <NavBar />
      <div className="main-container">
        <LeftBar />
        <div className="content" style={{ flex: "6" }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};
export default Layout;
