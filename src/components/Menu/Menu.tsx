import React, { ReactElement, useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import MOCK_MENU from "../../shared/mock-menu";

interface Props {}

export default function Menu({}: Props): ReactElement {
  const [menu, setMenu] = useState(MOCK_MENU);
  const saladItems = MOCK_MENU.filter((menu) => {
    return menu.category === "salads";
  });
  const soupItems = MOCK_MENU.filter((menu) => {
    return menu.category === "soups";
  });
  const mainItems = MOCK_MENU.filter((menu) => {
    return menu.category === "main";
  });
  return (
    <div className="menuContainer">
      <h1>Menu</h1>
      <button>Add Menu Item</button>
      <div>
        <div className="menu-category">Salads</div>
        <div className="menu-wrapper">
          {saladItems.map((item) => (
            <MenuItem menu={item} />
          ))}
        </div>
        <div className="menu-category">Soups</div>
        <div className="menu-wrapper">
          {soupItems.map((item) => (
            <MenuItem menu={item} />
          ))}
        </div>
        <div className="menu-category">Main dishes</div>
        <div className="menu-wrapper">
          {mainItems.map((item) => (
            <MenuItem menu={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
