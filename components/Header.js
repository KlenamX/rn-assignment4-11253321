import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Jobizz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    // marginLeft: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "#356899",
    // fontFamily: "Poppins",
  },
});
