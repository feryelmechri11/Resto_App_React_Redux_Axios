import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { postOrderInApi,getAllallOrders,getOrdersFromApi,DeleteORderfromApi} from "../Action/action";
class ClientMeal extends Component {
 

 
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
               
                <button  className="btn btn-secondary btn-sm" onClick={() => this.props.addOrder({
                    "name_meal": el.name_meal,
                    "descrip_meal": el.descrip_meal,
                    "price_meal": el.price_meal,
                    "picture": el.picture,
                    "quantity":1,
                    "UnitPrice":el.price_meal
                  
                  })}> <i aria-hidden="true" class="shop icon"></i>commander </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => ({

  Meals: state.menuReducerkey,

});
const mapDispatchToProps = (dispatch) => ({

  addOrder: (el) => dispatch(postOrderInApi(el)),
  
 
 
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientMeal);

