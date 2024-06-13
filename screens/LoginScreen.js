import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Login from "../components/Login";

export default function LoginScreen() {
  return (
    <View style={styles.screen}>
      <Header />
      <Welcome />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 30,
  },
});
