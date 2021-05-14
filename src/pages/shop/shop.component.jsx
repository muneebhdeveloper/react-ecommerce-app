import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import "./shop.styles.scss";

const Shop = ({ collections }) => (
  <div className="">
    {collections.map(({ id, ...otherShopProps }) => (
      <CollectionPreview key={id} {...otherShopProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(Shop);
