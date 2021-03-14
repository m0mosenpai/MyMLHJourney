import React from "react";
import ReactDOM from "react-dom";
import GithubAuth from "./GithubAuthUI";
import UserContextProvider from "./context/userContext";
import ParentCardComponent from "./cards/parentCard";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <GithubAuth/>
      <ParentCardComponent/>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
