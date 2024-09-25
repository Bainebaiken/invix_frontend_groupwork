import React from "react";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import NavBar from "../../../components/admin/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar/>
        container</div>
    </div>
  );
};

export default Home;
