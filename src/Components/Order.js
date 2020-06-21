import React, { Component } from "react";
import axios from "axios";
class Order extends Component {
  state = {
    order: [],
    q: 1,
  };
  /****************************************************Get axios order list ******************************** */
  componentDidMount() {
    axios
      .get("http://localhost:8000/order")
      .then((res) => this.setState({ order: res.data }));
  }
  /********************************fonction**********************/

  IncrementQuantityAndPrice = (el) => {
    el.quantity++;
    el.price_meal = el.UnitPrice * el.quantity;
    console.log(el.quantity);
    axios.patch(`http://localhost:8000/order/${el.id}`, el);
    window.location.reload();
  };
  /*************************DECREMENT ************ */
  DecreaseQuantityAndPrice = (el) => {
    el.quantity--;
    el.price_meal = el.UnitPrice * el.quantity;
    console.log(el.quantity);
    axios.patch(`http://localhost:8000/order/${el.id}`, el);
    window.location.reload();
  };
  render() {
    return (
      <div className="App">
        <div className="OrderList">
          <ul className="order">
            {this.state.order.map((el) => (
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
                <button  class="ui icon button" onClick={() => this.IncrementQuantityAndPrice(el)}>
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

export default Order;
