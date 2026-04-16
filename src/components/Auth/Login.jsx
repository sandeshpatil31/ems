import React, { useState } from "react";

const Login = ({handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("email is", email);
    // console.log("password is", password);
    setEmail("");
    setPassword(""); // when form submit then input will be empty
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white/10 backdrop-blur-lg border border-emerald-500/30 rounded-2xl shadow-2xl p-10 w-[350px]">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h1>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <input
            value={email}
            onChange={(e) => {
              //  console.log(e.target.value)
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border border-emerald-500 text-lg py-3 px-5 rounded-full placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            type="email"
            placeholder="Enter Email"
          />

          <input
            value={password}
            onChange={(e) => {
              //  console.log(e.target.value)
              setPassword(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border border-emerald-500 text-lg py-3 px-5 rounded-full placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            type="password"
            placeholder="Enter Password"
          />

          <button
           className="bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-3 rounded-full mt-3 shadow-lg">
            Login
          </button>

          <p className="text-gray-400 text-sm text-center mt-2">
            Forgot password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
