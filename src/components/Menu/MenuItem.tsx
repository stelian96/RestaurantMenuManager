import React, { ReactElement } from "react";
import { Menu } from "../../shared/shared";

interface Props {
  menu: Menu;
}

export default function MenuItem({ menu }: Props): ReactElement {
  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={`${menu.imageUrl}`} />
      </div>
      <div className="contentItem">
        <h4>{menu.foodName}</h4>
        <p className="description">{menu.description}</p>
        <div className="orderSection">
          <p>{menu.price} $</p>
          <button>Add to Cart</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
