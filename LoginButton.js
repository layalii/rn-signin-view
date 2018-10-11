import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const LoginButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.touchable, styles.alignSCenter]}
    >
      <Text style={{ color: "white" }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

LoginButton.defaultProps = {
  title: "Button LOL",
  onPress: () => {
    alert("Hello");
  }
};

export default LoginButton;

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
    width: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 3
  },
  alignSCenter: {
    alignSelf: "center"
  }
});
