import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import UserIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CategoryIcon from '@mui/icons-material/Category';
import Logo from "../../../assets/images/logo.jpg";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        
      <Link to="/">
        <span className="logo">
          <img
              src=
               {Logo}
              alt="Henry"
              className="avatar"
          />
          <span>
            Dashboard
          </span>
        </span>
      </Link>
      </div>
      {/* <hr/> */}
      <div className="center">
        <ul>
          <Link to="/admin/NewUser">
          <li>
            <UserIcon className="icon"/>
            <span> Users</span>
          </li>
          </Link>
          <Link to="/admin">
          <li>
            <NewspaperIcon className="icon"/>
            <span> Articles</span>
          </li>
          </Link>
          <Link to="/admin/NewCat">
          <li>
            <CategoryIcon className="icon"/>
            <span> Categories</span>
          </li>
          </Link>
          <Link to="/admin/DeleteArticle">
          { <li>
            <CategoryIcon className="icon"/>
            <span> delete article</span>
          </li> }
          </Link>
        </ul>
      </div>
      { <div className="bottom">ooptions</div> }
    </div>
  );
};

export default Sidebar;
