import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {getOrdersFromApi, DeleteORderfromApi} from "../Action/action";
class Order extends Component {
  state = {
    order: [],
    q: 1,
  };
  componentDidMount() {
   
    this.props.getOrder();
  }
  /********************************fonction**********************/
/*
  IncrementQuantityAndPrice = (el) => {
    el.quantity++;
    el.price_meal = el.UnitPrice * el.quantity;
    console.log(el.quantity);
    axios.patch(`http://localhost:8000/order/${el.id}`, el);
    window.location.reload();
  };
  /*************************DECREMENT ************ 
  DecreaseQuantityAndPrice = (el) => {
    el.quantity--;
    el.price_meal = el.UnitPrice * el.quantity;
    console.log(el.quantity);
    axios.patch(`http://localhost:8000/order/${el.id}`, el);
    window.location.reload();
  };
  ***/
  render() {
    return (
      <div className="App">
        <h1>EKhdemi khanoooorgooood </h1>
        <div className="OrderList">
          <ul className="order">
            {this.props.Orders.map((el) => (
              <li className="mealOrderItem" key={el.id}>
                <div className="pictureOrder">
                  <img
                    className="mealPicture"
                    src={el.picture}
                    alt="pic of the meal"
                  />
                </div>
                <div>
                  <h5 className="nameMeal">{el.name_meal} </h5>

                  <p className="description">{el.descrip_meal}</p>

                  <h4 className="price"> prix : {el.price_meal} DT </h4>
                </div>
                <div>
                  <button  class="ui icon button" onClick={() => this.IncrementQuantityAndPrice(el)}><i aria-hidden="true" class="plus icon"></i>
                    
                  </button>
                  <p> {el.quantity}</p>
                  <button class="ui icon button" onClick={() => this.DecreaseQuantityAndPrice(el)}><i aria-hidden="true" class="minus icon"></i>
                    
                  </button>
                 
                </div>
                <button  class="ui icon button" onClick={() => this.props.deleteOrder(el.id)}>
                <i aria-hidden="true" class="delete icon"></i>
                  </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  Orders: state.orders,

});
const mapDispatchToProps = (dispatch) => ({
  getOrder: () => dispatch(getOrdersFromApi()),
  deleteOrder: (el) => dispatch(DeleteORderfromApi(el)),
 
 
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
