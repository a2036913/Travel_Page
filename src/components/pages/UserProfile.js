import React from "react";

function UserProfile() {
  return (
    <>
      <div className="h-screen px-80 pt-10 bg-center bg-cover bg-no-repeat" 
      >
        <div className="h-20"></div>

        <div className="flex flex-col min-w-max px-5 py-10 border-dotted border-gray-400 border rounded-lg z-10">
          <div className="mb-4">
            <span className="text-left w-auto text-red-600 text-3xl border-b-2 border-yellow-500 border-opacity-50 cursor-default">
              Yours Profile
            </span>
            <span className="float-right text-red-600 border-b  border-transparent hover:text-red-800 hover:border-red-800 cursor-pointer">
              Delete Account
            </span>
          </div>
          <h2 className="justify-center w-2/6">Profile Picture</h2>

          <div>
            
              <img
                src="/images/img-1.jpg"
                alt=""
                className="w-20 h-20 rounded-full"
              />
            
            
              <label htmlFor="fileInput" className="items-center ml-40">
                <i class="fas fa-plus text-green-600 cursor-pointer border-transparent border-2 rounded-full p-1 hover:border hover:border-green-300"></i>
              </label>
            
            <input type="file" id="fileInput" className="hidden" />
          </div>

          <div>
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              className="px-2 border border-solid border-gray-500 rounded-md"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter your Email here"
              className="px-2 border border-solid border-gray-500 rounded-md"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="password"
              placeholder="Enter your password here"
              className="px-2 border border-solid border-gray-500 rounded-md"
            />
          </div>
          <button className="w-1/12 h-8 text-xs self-center text-white rounded-2xl bg-green-500 ring-2 ring-green-500 hover:bg-opacity-50 hover:ring-green-800">
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
