import axios from "axios";




/****************************  Action : Get MEALS to API -ADMIN - ******************************* */
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

/****************************  Action : add Meal to API -ADMIN- ******************************* */

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

/*************************************** ACTION : delete Meal from API  -ADMIN- ************************* */

  
  export function DeletefromAPI(id) {
    return () => {
      axios.delete("http://localhost:8000/meals/" + id).then((res) => {console.log(res.data)
      window.location.reload()});
    }}

/*************************************** ACTION : Update Meal from API -ADMIN-  ************************* */

    export function UpdateInApi(el) {
        return () =>
          axios.patch(`http://localhost:8000/meals/${el.id}`, el).then((res) => {
            console.log(res.data);
            window.location.reload();
          });
      }


      /**************************************************************************** */
     
/****************************  Action : Get ORDER to API -CLIENT - ******************************* */
export const getAllOrders = (payload) => ({
    type: "getAllOrders",
    payload,
  });
  
  export function getOrdersFromApi() {
    return (dispatch) =>
      axios.get("http://localhost:8000/order").then((res) =>
        dispatch(getAllOrders(res.data))
      );
  }


/****************************  Action : ADD ORDER to API -CLIENT - ******************************* */
  
  export function postOrderInApi(el) {
    return () =>
      axios.post("http://localhost:8000/order",el)
       
      .then((res) => {console.log(res.data)
        window.location.reload()});
  }



/****************************  Action : delete ORDER to API -CLIENT - ******************************* */

  
  export function DeleteORderfromApi(id) {
    return () => {
      axios.delete("http://localhost:8000/order/"+ id).then((res) => {
        console.log(res.data);
        window.location.reload();
      });
     
    };
  }