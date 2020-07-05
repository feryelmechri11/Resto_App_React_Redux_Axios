import React, { Component } from "react";
import { connect } from 'react-redux';
import { apiData, getMealsFromApi } from './Action/action';
import "./App.css";
import Meal from "./Components/Meal";
import UserConnexion from "./Components/UserConnexion";
import axios from "axios";
import ClientMeal from "./Components/ClientMeal";
import Order from "./Components/Order";
import { Spinner, Navbar } from "reactstrap";

class App extends Component {
  componentDidMount() {
    this.props.getMeals();

}
  state = {
    order: [],
    meals: [],
    mealName: "",
    mealDescription: "",
    mealPrice: "",
    NewmealName: "",
    NewmealDescription: "",
    NewmealPrice: "",
    NewmealPicture: "",
    mealPicture: "",
    user: [],
    loginUser: "",
    pwdUser: "",
    nameUser: "",
    roleUser: "",
    NewLogin: "",
    NewPwd: "",
    NewName: "",
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
    let name = this.state.NewName;

    axios.post("http://localhost:8000/user", {
      login,
      pwd,
      name,
    });
    axios
      .get("http://localhost:8000/user")
      .then((res) => this.setState({ user: res.data }));
    window.location.reload();
  };
  /******************************************* */
  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <div className="App">
      
          <Navbar />
          <UserConnexion
            user={this.state.user}
            getLoginUser={this.GetSignInLogin}
            getPwdUser={this.GetSignInPwd}
            getNameUser={this.GetSignInName}
            signIn={this.AddUser}
          />
          <Meal
            Meals={this.state.meals}
            PictureMeal={this.state.mealPicture}
            getName={this.GetMealName}
            getDescription={this.GetMealdescription}
            getPrice={this.GetMealPrice}
            getPicture={this.GetMealPicture}
            addMeal={this.AddMeal}
            update={this.update}
            deleteMeal={this.DeleteMeal}
            editName={this.GetModificationName}
            editDescription={this.GetModificationDescription}
            editPrice={this.GetModificationPrice}
            editPicture={this.GetModificationPicture}
          />
          <ClientMeal Meals={this.state.meals} />
          <Order />
      
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  listMeals: state.menuReducerkey,

});

const mapDispatchToProps = (dispatch) => ({
  getMeals: () => dispatch(getMealsFromApi()),
 // addFood: (el) => dispatch(addFoodToApi(el)),


});




export default connect(mapStateToProps, mapDispatchToProps)(App)
