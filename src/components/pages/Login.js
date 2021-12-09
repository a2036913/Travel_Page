import React from "react";

function Login() {
  return (
    <div
      className="h-screen bg-center 
    bg-gradient-to-r from-green-300 to-blue-300"
    >
      {/* empty area */}
      <div className="h-40"></div>

      <div className="w-2/5 h-auto pt-6 mx-auto border-solid border-2  rounded-xl bg-white bg-opacity-30">
        <h1 className="border-b-2 border-green-300 w-auto pb-2 font-serif text-2xl">
          Login
        </h1>
        <div className="flex flex-col px-10 mt-5">
          <div class="py-2">
            <i class="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className="ml-2 px-4 w-2/5 focus:ring-2 focus:ring-blue-600 outline-none rounded-sm"
            />
          </div>
          <div class="pb-2">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className="ml-2 px-4 w-2/5 focus:ring-2 focus:ring-blue-600 outline-none rounded-sm"
            />
          </div>
          <button className="border-black border-b hover:bg-white hover:border-none rounded-sm">
            Login
          </button>
          <button className="border-black border-b hover:bg-white hover:border-none rounded-sm mb-4">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
