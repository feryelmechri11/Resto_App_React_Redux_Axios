import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Meal from "./Components/Meal";
import UserConnexion from "./Components/UserConnexion";
import axios from "axios";
import ClientMeal from "./Components/ClientMeal";
import Order from "./Components/Order";
import { Spinner, Navbar } from "reactstrap";

class App extends Component {
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

  /****************************************************Get axios meal list ******************************** */
  componentDidMount() {
    axios
      .get("http://localhost:8000/meals")
      .then((res) => this.setState({ meals: res.data }));
  }
  /*******************************************Add Axios meal ********************************************* */

  AddMeal = () => {
    let name_meal = this.state.mealName;
    let descrip_meal = this.state.mealDescription;
    let price_meal = this.state.mealPrice;
    let picture = this.state.mealPicture;
    axios.post("http://localhost:8000/meals", {
      name_meal,
      descrip_meal,
      price_meal,
      picture,
    });
    axios
      .get("http://localhost:8000/meals")
      .then((res) => this.setState({ meals: res.data }));
    window.location.reload();
  };
  /*********************************************  Axios Delete Meal****************************************** */
  DeleteMeal = (id) => {
    axios.delete(`http://localhost:8000/meals/${id}`);
    window.location.reload(false);
  };

  /***************************************Axios Update Meal******************************************** */
  update = (id) => {
    let name_meal = this.state.NewmealName;
    let descrip_meal = this.state.NewmealDescription;
    let price_meal = this.state.NewmealPrice;
    let picture = this.state.NewmealPicture;
    axios
      .put(`http://localhost:8000/meals/${id}`, {
        name_meal,
        descrip_meal,
        price_meal,
        picture,
      })
      .then((res) => console.log(res.data));
    window.location.reload();
  };

  /********************************** handle change edit meal ********************** */

  /******************* handle change edit******************************* */
  GetModificationName = (e) => {
    this.setState({ NewmealName: e.target.value });
  };
  GetModificationDescription = (e) => {
    this.setState({ NewmealDescription: e.target.value });
  };
  GetModificationPrice = (e) => {
    this.setState({ NewmealPrice: e.target.value });
  };
  GetModificationPicture = (e) => {
    this.setState({ NewmealPicture: e.target.value });
  };
  /****************************************************** */

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
        <Router>
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
        </Router>
      </div>
    );
  }
}

export default App;
