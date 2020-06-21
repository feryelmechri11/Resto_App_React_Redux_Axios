import React, { Component } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class SignIn extends Component {
    state = {
        modal: false,
        user:[],
        loginUser:"",
        pwdUser:"",
        nameUser:"",
        roleUser:"",
        NewLogin:"",
        NewPwd:"",
        NewName:""
    }
 
    
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
     /******************* handle change Sign in ******************************* */
  GetSignInLogin = (e) => {
    this.setState({ NewLogin: e.target.value });
  };
  GetSignInPwd = (e) => {
    this.setState({ NewPwd: e.target.value });
  };
  GetSignInName = (e) => {
    this.setState({ NewName: e.target.value });
  };
 /*******************************************Add Axios User ********************************************* */

 AddUser = () => {
    let login = this.state.NewLogin;
    let pwd = this.state.NewPwd;
    let name= this.state.NewName;
   
    axios.post("http://localhost:8000/user", 
    {
      login,
      pwd,
      name,
    });
    axios
      .get("http://localhost:8000/user")
      .then((res) => this.setState({ meals: res.data }));
      window.location.reload();
  };
    render(){
        return(
<div>
<div className="Add_User_Button">
          <Button  className="Add_Meal_Btn" color="danger" onClick={this.toggle}> <i aria-hidden="true" class="add square icon"></i> Add Meal </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Sign up Now  </ModalHeader>
            <ModalBody>
              <input
                type="text"
                placeholder="enter your name"
                onChange={(e) => this.GetSignInName(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter your email/login"
                onChange={(e) => this.GetSignInLogin(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter your password"
                onChange={(e) => this.GetSignInPwd(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="Submit"
                onClick={() => this.AddUser()}
              >
               Add Meal
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
</div>
        )

        
    }
}
export default  SignIn;