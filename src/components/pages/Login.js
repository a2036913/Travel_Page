import React from "react";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div
      className="h-screen bg-center 
    bg-gradient-to-r from-green-300 to-blue-300"
    >

      <div className="h-40"></div>
      <div className="w-2/5 h-auto pt-6 mx-auto border-solid border-2  rounded-xl bg-white bg-opacity-30">
        <h1 className="border-b-2 border-indigo-800 w-auto pb-2 font-serif text-3xl">
          Login
        </h1>
        <div className="flex flex-col h-64 px-20">
          <div class="mt-8 mb-4 w-4/5 self-center">
            <i class="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className="ml-2 px-4 w-4/5 h-8 focus:ring-blue-600 outline-none rounded-sm"
            />
          </div>
          <div class="mb-4 w-4/5 self-center">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className="ml-2 px-4 w-4/5 h-8 focus:ring-blue-600 outline-none rounded-sm"
            />
          </div>
          <button className="text-2xl border-black border-b hover:bg-white hover:border-none rounded-sm">
            Login
          </button>
          <Link to='/signup' className="my-4 text-center text-2xl border-black border-b hover:bg-white hover:border-none rounded-sm mb-4">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
