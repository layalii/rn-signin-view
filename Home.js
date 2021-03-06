import React, { Component } from "react";
import { Text, StyleSheet, Image, ScrollView } from "react-native";
import LoginButton from "./LoginButton";
import { createStackNavigator } from "react-navigation";

export default class HomeScreen extends Component {
  static defaultProps = {};
  render() {
    return (
      <React.Fragment>
        <ScrollView
          style={styles.scrollviewParent}
          contentContainerStyle={styles.scrollview}
        >
          <Text style={styles.text1}>Create an account</Text>
          <Text style={styles.text2}>Mansions you only dreamed of</Text>
          <Image source={require("img/img.png")} style={styles.image} />
          <LoginButton
            title="SIGNUP"
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Text style={[styles.alignSCenter, { opacity: 0.6, paddingTop: 10 }]}>
            Terms of service
          </Text>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  alignSCenter: {
    alignSelf: "center"
  },
  text1: {
    color: "#3E4A59",
    marginTop: 10,
    fontSize: 18,
    marginTop: 60,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  text2: {
    color: "#445EE9",
    fontSize: 28,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingBottom: 10,
    letterSpacing: 33
  },
  image: {
    width: "100%",
    height: 400,
    marginBottom: 10,
    resizeMode: "contain"
  },
  scrollview: {},
  scrollviewParent: {
    flexGrow: 1
  }
});
