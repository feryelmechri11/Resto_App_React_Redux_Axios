import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class EditMeal extends React.Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="btn btn-secondary btn-sm" >  <i aria-hidden="true" class="edit icon"></i>Edit Meal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Edit Meal </ModalHeader>
          <ModalBody>
            <input
              type="text"
              onChange={this.props.editName}
              defaultValue={this.props.el.name_meal}
            />
            <input
              type="text"
              onChange={this.props.editDescription}
              defaultValue={this.props.el.descrip_meal}
            />
            <input
              type="text"
              onChange={this.props.editPrice}
              defaultValue={this.props.el.price_meal}
            />
             <input
                type="text"
                src={this.props.PictureMeal}
                alt="meal picture "
                placeholder="Picture of the meal "
                defaultValue={this.props.el.picture}
                onChange={this.props.editPicture}

              />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.props.update(this.props.el.id)}
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
export default EditMeal ;