import React, { Component } from "react";
import axios from "axios";
class ClientMeal extends Component {
  state = {
    order: [],
    mealName: "",
    mealDescription: "",
    mealPrice: "",
    mealQuantity: "",
    mealPicture: "",
  };

  /*******************************************Add Axios meal ********************************************* */

  AddOrder = (el) => {
    let name_meal = el.name_meal;
    let descrip_meal = el.descrip_meal;
    let price_meal = el.price_meal;
    let picture = el.picture;
    let quantity = 1;
    let UnitPrice = el.price_meal;
    console.log(UnitPrice);
    axios.post("http://localhost:8000/order", {
      name_meal,
      descrip_meal,
      price_meal,
      quantity,
      picture,
      UnitPrice,
    });

    window.location.reload();
  };
  render() {
    return (
      <div className="App">
        <div className="MealList">
          <ul className="meals">
            {this.props.Meals.map((el) => (
              <li className="mealItem" key={el.id}>
                <div>
                <img
                  className="mealPicture"
                  src={el.picture}
                  alt="pic of the meal"
                />
               <h5 className="nameMeal">{el.name_meal} </h5> 

               <p className="description">  {el.descrip_meal} </p>

              <h4 className="price">  prix  {el.price_meal} DT  </h4>
               
                <button  className="btn btn-secondary btn-sm" onClick={() => this.AddOrder(el)}> <i aria-hidden="true" class="shop icon"></i>commander </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ClientMeal;
