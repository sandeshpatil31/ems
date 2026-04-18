import React, { use, useContext, useEffect, useState } from "react";
import Login from "/src/components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  //   useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState();
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if(employee) {
      setUser("employee");
      setLoggedInUserData(employee)
      localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee" }))
      }

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
     {user === 'admin' && <AdminDashboard  />}
      {user === 'employee' ? <EmployeeDashboard data= {loggedInUserData} /> : null  }
    </>
  );
};

export default App;
