import React, { Component } from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title }) => (
  <div className="colletion-preview">
    <div className="title">{title.toUpperCase()}</div>
    <div className="preview"></div>
  </div>
);

export default CollectionPreview;
