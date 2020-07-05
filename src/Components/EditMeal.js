import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { UpdateInApi} from "../Action/action";
class EditMeal extends React.Component {
  state = {
    modal: false,
    id:this.props.el.id,
    NewmealName: this.props.el.name_meal,
    NewmealDescription: this.props.el.mealDescription,
    NewmealPrice:  this.props.el.mealPrice,
    NewmealPicture: this.props.el.mealPicture,
  };
  
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  /******************* handle change edit******************************* */
  GetModificationName = (e) => {
    this.setState({ NewmealName: e });
  };
  GetModificationDescription = (e) => {
    this.setState({ NewmealDescription: e});
  };
  GetModificationPrice = (e) => {
    this.setState({ NewmealPrice: e});
  };
  GetModificationPicture = (e) => {
    this.setState({ NewmealPicture: e });
  };
  /****************************************************** */

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="btn btn-secondary btn-sm" >  <i aria-hidden="true" class="edit icon"></i>Edit Meal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Edit Meal </ModalHeader>
          <ModalBody>
            <input
              type="text"
              onChange={(e) => this.GetModificationName(e.target.value)}
              defaultValue={this.props.el.name_meal}
            />
            <input
              type="text"
              
              onChange={(e) => this.GetModificationDescription(e.target.value)}
              defaultValue={this.props.el.descrip_meal}
            />
            <input
              type="text"
              
              onChange={(e) => this.GetModificationPrice(e.target.value)}
              defaultValue={this.props.el.price_meal}
            />
             <input
                type="text"
                src={this.props.PictureMeal}
                alt="meal picture "
                placeholder="Picture of the meal "
                defaultValue={this.props.el.picture}
                onChange={(e) => this.GetModificationPicture(e.target.value)}
               

              />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.props.editMeal({
                "id":this.state.id,
                "name_meal": this.state.NewmealName,
                "descrip_meal": this.state.NewmealDescription,
                "price_meal": this.state.NewmealPrice,
                "picture": this.state.NewmealPicture,
              })}
            >
              Save change 
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  editMeal: (el) => dispatch(UpdateInApi(el)),
  
});
export default connect(null, mapDispatchToProps)(EditMeal);