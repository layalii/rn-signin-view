import React from "react";
import Home from "./Home";
import Login from "./Login";
import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <Route />;
  }
}

const Route = createStackNavigator(
  {
    Home: {
      screen: Home
      // navigationOptions: () => {
      //   return {
      //     header: null
      //   };
      // }
    },
    Login: Login
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
