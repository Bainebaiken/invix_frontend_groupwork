import React, { useState, useEffect } from "react";
import navigationContext from "../../contexts/navigationsContext";
import navigations from "../../Data/navigation.json";
import posts from "../../Data/posts.json";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../Helpers/BackToTop";
import Drawer from "../Mobile/Drawer";
import Footer from "../Partials/Footers/Home/index";
import Header from "../Partials/Headers/Header";
import DarkEditorPackSection from "./DarkEditorPackSection";
import EditorPackSection from "./EditorPackSection";
import HeroSliderSection from "./HeroSliderSection";
import PopularNewsSection from "./PopularNewsSection";
// import { API_BASE_URL } from "../../../config";

function Home() {
  const navigationData = navigations.navigations;
  const editorPackSectionDatas = posts.posts;
  const [popularNewsData, setPopularNewsData] = useState([]);
  const [drawer, setDrawer] = useToggle(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`${API_BASE_URL}/articles/`);
        const response = await fetch(`hhttps://invix-backend-group-work.onrender.com/api/v1/articles/`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const technologyPosts = data;
        setEditorPackSectionDatas(technologyPosts);
        setPopularNewsData(technologyPosts); // Assuming you want to use the same data for popular news
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle error state, show error message to user, etc.
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Drawer
        drawer={drawer}
        action={setDrawer.toggle}
        navigationData={navigationData}
      />
      <navigationContext.Provider value={{ navigationData }}>
        <Header drawerAction={setDrawer.toggle} />
      </navigationContext.Provider>

      <EditorPackSection editorPackSectionDatas={editorPackSectionDatas} />
      <DarkEditorPackSection editorPackSectionDatas={editorPackSectionDatas} />
      {/* <PopularNewsSection popularNewsData={popularNewsData} /> */}

      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
