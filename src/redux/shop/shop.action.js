import { shopActionsType } from "./shop.types";
import {
  firestore,
  convertCollectionsIntoMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopActionsType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: shopActionsType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: shopActionsType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapshot) => {
        dispatch(fetchCollectionSuccess(convertCollectionsIntoMap(snapshot)));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error)));
  };
};
