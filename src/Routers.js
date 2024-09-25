import { Route, Routes } from "react-router-dom";
import About from "./components/About/index";
import SinglePost from "./components/Blogs/SinglePost/index";
import Contact from "./components/Contact/index";
import Home from "./components/Home/index";
import Sports from "./components/Sports/index";
import Politics from "./components/Politics/index";
import Technology from "./components/Technology/index";
import Education from "./components/Education/index";
import Entertainment from "./components/Entertainment/index";
import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';
import AdminHome from "./admin/pages/home/Home";
import NewUser from "./admin/pages/newUser/New";
import NewArticle from "./admin/pages/newArticle/NewArticle";
import NewCategory from "./admin/pages/newCategory/New";
import SinglePage from "./admin/pages/single/Single";
import UsersList from "./admin/pages/Users/UsersList";
import DeleteArticle from "./admin/pages/deleteArticle/delete";
import Login from "./admin/pages/login/Login";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<SinglePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/technology" element={<Technology />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/Politics" element={<Politics />} />
        <Route exact path="/Entertainment" element={<Entertainment />} />
        <Route exact path="/admin/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/admin" element={<NewArticle />} />
        <Route exact path="/admin/NewCat" element={<NewCategory />} />
        <Route exact path="/admin/NewUser" element={<NewUser />} />
        <Route exact path="/admin/login" element={<Login />} />
        <Route exact path="/admin/DeleteArticle" element={<DeleteArticle />} />

        <Route path="/admin/article">
          <Route path=":articleId" element={<SinglePage />} />
          <Route path="new" element={<NewArticle />} />
        </Route>
        <Route path="/admin/category">
          <Route path=":articleId" element={<SinglePage />} />
          <Route path="new" element={<NewCategory />} />
        </Route>
        <Route path="/admin/users">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<SinglePage />} />
          <Route path="new" element={<NewUser />} />
        </Route>
      </Routes>
    </>
  );
}



// import { Route, Routes } from "react-router-dom";
// import About from "./components/About/index";
// import SinglePost from "./components/Blogs/SinglePost/index";
// import Contact from "./components/Contact/index";
// import Home from "./components/Home/index";
// import Sports from "./components/Sports/index";
// import Politics from "./components/Politics/index";
// import Entertainment from "./components/Entertainment/index";
// import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
// import AdminHome from "./admin/pages/home/Home"
// import NewUser from "./admin/pages/newUser/New"
// import NewArticle from "./admin/pages/newArticle/NewArticle"
// import NewCategory from "./admin/pages/newCategory/New"
// import SinglePage from "./admin/pages/single/Single"
// import UsersList from "./admin/pages/Users/UsersList"
// import DeleteArticle from "./admin/pages/deleteArticle/delete"
// import Login from "./admin/pages/login/Login"
// // import Delete from "./admin/pages/DeleteArticle/delete";


// export default function Routers() {
//   return (
//     <>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/details" element={<SinglePage />} />
//         <Route exact path="/about" element={<About />} />
//         <Route exact path="/contact" element={<Contact />} />
//         <Route exact path="/sports" element={<Sports />} />
//         <Route exact path="/Politics" element={<Politics />} />
//         <Route exact path="/Entertainment" element={<Entertainment />} />
//         <Route exact path="/admin/AdminDashboard" element={<AdminDashboard/>} />
//         <Route exact path="/admin" element={<NewArticle />} />
//         <Route exact path="/admin/login" element={<Login />} />
//         <Route exact path="/admin/DeleteArticle" element={<DeleteArticle />} />
//         <Route path="/admin/article">
//           <Route path=":artcleId" element={<SinglePage/>}/>
//           <Route path="new" element={<NewArticle/>}/>
//         </Route>
//         <Route path="/admin/category">
//           <Route path=":artcleId" element={<SinglePage/>}/>
//           <Route path="new" element={<NewCategory/>}/>
//         </Route>
//         <Route path="/admin/users">
//           <Route index element={<UsersList/>}/>
//           <Route path=":userId" element={<SinglePage/>}/>
//           <Route path="new" element={<NewUser/>}/>
//         </Route>
//       </Routes>
//     </>
//   );
// }
