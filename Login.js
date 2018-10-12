import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "react-native-checkbox";
import LoginButton from "./LoginButton";

export default class LoginScreen extends Component {
  state = {
    isChecked: false
  };
  render() {
    const { isChecked } = this.state;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Ionicons
              name="md-arrow-back"
              size={32}
              color="black"
              style={{ marginTop: 60, marginBottom: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.txt1}>Glad to see you </Text>
          <Text style={styles.grclr}>Username</Text>
          <TextInput
            style={[styles.Input, { height: 30 }]}
            placeholder="Paolo az"
          />
          <Text style={styles.grclr}>Password</Text>
          <TextInput style={[styles.Input, { height: 30 }]} placeholder="***" />
          <View style={styles.flex}>
            <CheckBox
              label="Remember me"
              checked={isChecked}
              onChange={() => {
                this.setState({ isChecked: !isChecked });
              }}
              checkedImage={require("img/checked.png")}
              uncheckedImage={require("img/unchecked.png")}
            />
            <Text>forget password</Text>
          </View>
          <LoginButton title="SIGN UP" />
          <Text style={styles.label}>New user? SignIn</Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  grclr: {
    color: "gray",
    fontSize: 18
  },
  txt1: {
    color: "gray",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40
  },
  Input: {
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 5,
    marginHorizontal: 20,
    marginBottom: 60
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  label: {
    fontSize: 14,
    alignSelf: "center",
    marginTop: 10
  }
});
