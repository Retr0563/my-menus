import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <>
      <h2>Our Menus</h2>
    </>
  );
}

export default App;
