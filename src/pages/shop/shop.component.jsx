import React from "react";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../components/collection/collection.component";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default Shop;
