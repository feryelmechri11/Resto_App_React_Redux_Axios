import React, { Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class UserConnexion extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div>
        <div className="Add_User_Button">
          <Button className="Add_Meal_Btn" color="danger" onClick={this.toggle}>
            {" "}
            <i aria-hidden="true" class="add square icon"></i> SIgn In {" "}
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Sign up Now </ModalHeader>
            <ModalBody>
              <input
                type="text"
                placeholder="enter your name"
                onChange={(e) => this.props.getNameUser(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter your email/login"
                onChange={(e) => this.props.getLoginUser(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter your password"
                onChange={(e) => this.props.getPwdUser(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="Submit"
                onClick={() => this.props.signIn()}
              >
                Submit
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div>
          <button class="ui animated button">
            <div class="visible content">Next</div>
            <div class="hidden content">
              <i aria-hidden="true" class="arrow right icon"></i>
            </div>
          </button>
          <button class="ui vertical animated button">
            <div class="hidden content">Shop</div>
            <div class="visible content">
              <i aria-hidden="true" class="shop icon"></i>
            </div>
          </button>
          <button class="ui vertical animated button">
            <div class="visible content">
              <i aria-hidden="true" class="user icon"></i>Sign-up{" "}
            </div>
            <div class="hidden content">$12.99 a month</div>
          </button>
        </div>
      </div>
    );
  }
}

export default UserConnexion;
