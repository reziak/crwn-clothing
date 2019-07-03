import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, image, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
