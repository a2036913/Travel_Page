import React, { useReducer } from "react";
// import LoginContext from "../context/LoginContext";


const LoginReducer = (state, action) => {
    const { key, type, value } = action;
    
    switch (type) {
      case "toggleHeader": {
        const newState = { ...state };
        newState.isShowing = !newState.isShowing;
        return newState;
      }
    
      default: {
        return state;
      }
    }
   };

   const Base = ({ children }) => {
    const [state, dispatch] = useReducer(LoginReducer, {
      isShowing: false
    });
    
    return (
      <LoginContext.Provider value={{ state, dispatch }}>
        <main className="App">
          <Navbar>
          {children}
          </Navbar>
        </main>
      </LoginContext.Provider>
    );
   };
//    export default Base;