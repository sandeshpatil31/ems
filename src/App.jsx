import React, { use, useContext, useEffect, useState } from "react";
import Login from "/src/components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";
const App = () => {
  const [user, setUser] = useState();
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");

      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));

      return;
    }

    // Employee login
    if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password,
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: employee, // ✅ IMPORTANT
          }),
        );

        return;
      }
    }

    // Invalid credentials
    alert("Invalid Credentials ❌");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
