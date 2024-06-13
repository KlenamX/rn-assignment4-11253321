import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button() {
  return (
    <View>
      <TouchableOpacity style={styles.loginContainter}>
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainter: {
    backgroundColor: "#356899",
    marginTop: 35,
    height: 56,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
