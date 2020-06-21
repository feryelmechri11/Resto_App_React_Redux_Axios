import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditMeal from "./EditMeal";

class Meal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div className="App">
        <div className="Add_Meal_Button">
          <Button  className="Add_Meal_Btn" color="danger" onClick={this.toggle}> <i aria-hidden="true" class="add square icon"></i> Add Meal </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add a new Meal </ModalHeader>
            <ModalBody>
              <input
                type="text"
                placeholder="meal name"
                onChange={(e) => this.props.getName(e.target.value)}
              />
              <input
                type="text"
                placeholder="meal description"
                onChange={(e) => this.props.getDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="meal price"
                onChange={(e) => this.props.getPrice(e.target.value)}
              />
            
              <input
                type="text"
                src={this.props.PictureMeal}
                alt="movie poster "
                placeholder="Picture of the meal "
                onChange={(e) => this.props.getPicture(e.target.value)}

              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="AddMeal"
                onClick={() => this.props.addMeal()}
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
            {this.props.Meals.map((el) => (
              <li className="mealItem" key={el.id}>
                <div>
              <img   className="mealPicture" src={el.picture} alt="pic of the meal" />
             <h5 className="nameMeal">{el.name_meal} </h5> 

                <p className="description">{el.descrip_meal}</p> 

                <h4 className="price"> prix : {el.price_meal} DT </h4> 
               <div className="btnMealAdmin">
                <button  type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.deleteMeal(el.id)}> <i aria-hidden="true" class="trash icon"></i>Delete Meal </button>
                <EditMeal update={this.props.update}  el={el}    editName={this.props.editName}   editDescription={this.props.editDescription} editPrice={this.props.editPrice} editPicture={this.props.editPicture}/> 
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

export default Meal;
