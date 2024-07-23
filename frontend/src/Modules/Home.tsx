import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export const Home = () => {
  const handleNavigation = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        backgroundColor: "#424242",
        height: "100vh",
      }}
    >
      <LeftSection handleNavigation={handleNavigation} />
      <RightSection handleNavigation={handleNavigation} />
    </div>
  );
};
