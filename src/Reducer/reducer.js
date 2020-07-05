import { combineReducers } from 'redux'


const listMeals = []

function reducersMeals(state = listMeals, action) {
    if (action.type === "MealsListAction") {
        return action.data;
    }
    return state
}

function reducersMealslist(state = listMeals, action) {
    if (action.type === "getMealsFromApi") {
        return action.data;
    }
    return state
}

const allReducers = combineReducers({
    menuReducerkey: reducersMeals,
    getMealsFromApiListReducer: reducersMealslist,

})

export default allReducers