import React, { Component } from "react";
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.styles.scss";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return <div className="">{
        collections.map({id ...otherShopProps} => (
            <CollectionPreview key={id} {...otherShopProps} />
        ))
    }</div>;
  }
}

export default Shop;
