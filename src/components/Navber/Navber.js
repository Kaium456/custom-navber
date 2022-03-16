import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navber.css";

const Navber = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="NavberItems">
      <h1 className="navber-logo">
        React<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cNave} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navber;
