import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Button from "./Button";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor="#95969D"
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#95969D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 208,
  },
  textInput: {
    height: 52,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#95969D",
    paddingLeft: 20,
    fontWeight: "500",
  },
  name: {
    marginBottom: 20,
  },
});
