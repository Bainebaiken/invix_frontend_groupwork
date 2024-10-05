import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import Navbar from '../../../components/admin/navbar/Navbar';
import UserTable from '../../../components/admin/UserTable/UserTable';
import ArticleTable from '../../../components/admin/ArticleTable/ArticleTable';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch users
    fetch('https://invix-backend-group-work.onrender.com/api/v1/auth/users', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched users:", data); // Debugging
        if (data && data.users) {
          setUsers(data.users);
        } else {
          console.error("Invalid users data structure");
        }
      })
      .catch((error) => console.error('Error fetching users:', error));

    // Fetch articles
    fetch('https://invix-backend-group-work.onrender.com/api/v1/articles/articles', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched articles:", data); // Debugging
        setArticles(data);
      })
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    // <div className="adminDashboard">
    //   <Sidebar />
    //   <div className="dashboardContainer">
    //     <Navbar />
    //     <div className="top">
    //       <h1>Admin Dashboard</h1>
    //     </div>
    //     <div className="bottom">
    //       <UserTable users={users} setUsers={setUsers} />
    //       <ArticleTable articles={articles} setArticles={setArticles} />
    //     </div>
    //   </div>
    // </div>
    <div className="dashboardContainer">
      {/* <Navbar /> */}
      <Sidebar />
    </div>
  );
};

export default AdminDashboard;





// import React, { useState, useEffect } from 'react';
// import Sidebar from '../../../components/admin/sidebar/Sidebar';
// import Navbar from '../../../components/admin/navbar/Navbar';
// import UserTable from '../../../components/admin/UserTable/UserTable';
// import ArticleTable from '../../../components/admin/ArticleTable/ArticleTable';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // Fetch users
//     fetch('http://127.0.0.1:5000/api/v1/auth/users', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => setUsers(data.users))
//       .catch(error => console.error('Error fetching users:', error));

//     // Fetch articles
//     fetch('http://127.0.0.1:5000/api/v1/articles/articles', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => setArticles(data))
//       .catch(error => console.error('Error fetching articles:', error));
//   }, []);

//   return (
//     <div className="adminDashboard">
//       <Sidebar />
//       <div className="dashboardContainer">
//         <Navbar />
//         <div className="top">
//           <h1>Admin Dashboard</h1>
//         </div>
//         <div className="bottom">
//           <UserTable users={users} setUsers={setUsers} />
//           <ArticleTable articles={articles} setArticles={setArticles} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
