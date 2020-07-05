import { combineReducers } from "redux";

const listMeals = [];
const initialState = [];

function reducersMeals(state = listMeals, action) {
  if (action.type === "MealsListAction") {
    return action.data;
  }
  return state;
}

function reducersMealslist(state = listMeals, action) {
  if (action.type === "getMealsFromApi") {
    return action.data;
  }
  return state;
}

function OrdersRedusers(state = initialState, action) {
  if (action.type === "getAllOrders") {
    return action.payload;
  }

  return state;
}
const allReducers = combineReducers({
  menuReducerkey: reducersMeals,
  getMealsFromApiListReducer: reducersMealslist,
  orders: OrdersRedusers,
});

export default allReducers;
