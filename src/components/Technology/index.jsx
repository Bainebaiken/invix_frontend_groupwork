import React, { useState, useEffect } from "react";
import navigationContext from "../../contexts/navigationsContext";
import navigations from "../../Data/navigation.json";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../Helpers/BackToTop";
import Drawer from "../Mobile/Drawer";
import Footer from "../Partials/Footers/Home/index";
import Header from "../Partials/Headers/Header";
import PopularNewsSection from "./PopularNewsSection";

function Home() {
  const navigationData = navigations.navigations;
  const [editorPackSectionDatas, setEditorPackSectionDatas] = useState([]);
  const [popularNewsData, setPopularNewsData] = useState([]);
  const [drawer, setDrawer] = useToggle(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Below Call the endpoint for fetching articles
        const response = await fetch('http://127.0.0.1:5000/api/v1/articles/get_technology');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        const technologyPosts = data.filter(article => article.category === 'Technology');
        // const technologyPosts = data;
        setEditorPackSectionDatas(technologyPosts);
        
        setPopularNewsData(technologyPosts); // Assuming you want to use the same data for popular news

        console.log(technologyPosts);

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

      <PopularNewsSection popularNewsData={popularNewsData} />
      {/* Render other sections using editorPackSectionDatas */}
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
