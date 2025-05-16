import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NamePerson from "./namePerson";
import App from "./App";
import PeopleList from "./PeopleList";
import reportWebVitals from "./reportWebVitals";
import ListNameFull from "./ListNameFull";
import PeopleTable from "./PeopleTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PeopleList />
    <ListNameFull />
    <PeopleTable />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
