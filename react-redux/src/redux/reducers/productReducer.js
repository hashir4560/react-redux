import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "hashir4560",
      category: "Programmer",
    },
  ],
};
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
