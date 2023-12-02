// main file in that app will run
import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));  //root id is taken from index.html file present in public folder where app will render
root.render(<App/>);