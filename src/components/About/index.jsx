import React, { useEffect } from "react";
import navigationContext from "../../contexts/navigationsContext";
import navigations  from "../../Data/navigation.json";
import useToggle from "../../Hooks/useToggle";
import Drawer from "../Mobile/Drawer";
import Footer from "../Partials/Footers/Home";
import HeaderFour from "../Partials/Headers/Header/index";
import MainSection from "./MainSection";

function About() {
  const navigationData = navigations.navigations;
  useEffect(() => {
    document.body.classList.add("gray-bg");
  });
  const [drawer, setDrawer] = useToggle(false);
  return (
    <>
      <Drawer
        drawer={drawer}
        action={setDrawer.toggle}
        navigationData={navigationData}
      />
      <navigationContext.Provider value={{ navigationData }}>
        <HeaderFour
          drawerAction={setDrawer.toggle}
          mainHeaderClasses="codex-er-page"
        />
      </navigationContext.Provider>
      <MainSection />
      <Footer />
    </>
  );
}

export default About;
