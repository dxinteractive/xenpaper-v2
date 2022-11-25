import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";

import { HashRouter, Routes, Route } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

function Main() {
  return <div>xenpaper-v2</div>;
}
