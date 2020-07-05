import axios from "axios";

export function apiData(data) {
  return {
    type: "MealsListAction",
    data,
  };
}
export function getMealsFromApi() {
  return (dispatch) => {
    axios.get("http://localhost:8000/meals").then((res) => {
      dispatch(apiData(res.data));
    });
  };
}

/****************************  Action : add Meal to API ******************************* */

export function addMealsToApi(el) {
  
  return () =>
    axios
      .post("http://localhost:8000/meals", {
        name_meal:el.name_meal,
      descrip_meal:el.descrip_meal,
      price_meal:el.price_meal,
      picture:el.picture
      })
      .then((res) => {console.log(res.data)
      window.location.reload()});
}

/*************************************** ACTION : delete Meal from API ************************* */

  
  export function DeletefromAPI(id) {
    return () => {
      axios.delete("http://localhost:8000/meals/" + id).then((res) => {console.log(res.data)
      window.location.reload()});
    }}

/*************************************** ACTION : Update Meal from API ************************* */

    export function UpdateInApi(el) {
        return () =>
          axios.patch(`http://localhost:8000/meals/${el.id}`, el).then((res) => {
            console.log(res.data);
            window.location.reload();
          });
      }