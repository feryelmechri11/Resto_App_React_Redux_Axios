import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditMeal from "./EditMeal";
import { connect } from "react-redux";
import { addMealsToApi , DeletefromAPI} from "../Action/action";
class Meal extends Component {
  state = {
    modal: false,
  };
  state = {
  name_meal: "",
  descrip_meal: "",
  price_meal: "",
  picture: "",
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
    /******************************************Get meal name ******************************** */
    GetMealName = (value) => {
      this.setState({ mealName: value });
    };
    /******************************************Get meal description ******************************** */
    GetMealdescription = (value) => {
      this.setState({ mealDescription: value });
    };
  
    /******************************************Get meal price ******************************** */
    GetMealPrice = (value) => {
      this.setState({ mealPrice: value });
    };
    /******************************************Get meal picture ******************************** */
    GetMealPicture = (value) => {
      this.setState({ mealPicture: value });
    };
  render() {
    return (
      <div className="App">
        <div className="Add_Meal_Button">
          <Button className="Add_Meal_Btn" color="danger" onClick={this.toggle}>
            {" "}
            <i aria-hidden="true" class="add square icon"></i> Add Meal{" "}
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add a new Meal </ModalHeader>
            <ModalBody>
              <input
                type="text"
                placeholder="meal name"
                onChange={(e) => this.GetMealName(e.target.value)}
              />
              <input
                type="text"
                placeholder="meal description"
                onChange={(e) => this.GetMealdescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="meal price"
                onChange={(e) => this.GetMealPrice(e.target.value)}
              />

              <input
                type="text"
                src={this.props.PictureMeal}
                alt="movie poster "
                placeholder="Picture of the meal "
                onChange={(e) => this.GetMealPicture(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="AddMeal"
                onClick={() =>
                  this.props.addMeal({
                    "name_meal": this.state.mealName,
                    "descrip_meal": this.state.mealDescription,
                    "price_meal": this.state.mealPrice,
                    "picture": this.state.mealPicture,
                  })
                }
              >
                Add Meal
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <div className="MealList">
          <ul className="meals">
            {this.props.listMeals.map((el) => (
              <li className="mealItem" key={el.id}>
                <div>
                  <img
                    className="mealPicture"
                    src={el.picture}
                    alt="pic of the meal"
                  />
                  <h5 className="nameMeal">{el.name_meal} </h5>

                  <p className="description">{el.descrip_meal}</p>

                  <h4 className="price"> prix : {el.price_meal} DT </h4>
                  <div className="btnMealAdmin">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => this.props.deleteMeal(el.id)}
                    >
                      {" "}
                      <i aria-hidden="true" class="trash icon"></i>Delete Meal{" "}
                    </button>
                    <EditMeal
                      el={el}
                    />
                  </div>
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
  listMeals: state.menuReducerkey,

});
const mapDispatchToProps = (dispatch) => ({
  addMeal: (el) => dispatch(addMealsToApi(el)),
  deleteMeal: (el) => dispatch( DeletefromAPI(el)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Meal);
