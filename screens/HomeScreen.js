import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text2}>{email}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/profile.jpeg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 30,
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 80,
  },
  header: {},
  text1: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0D0D26",
  },
  text2: {
    fontSize: 20,
    fontWeight: "400",
    color: "#95969D",
  },
  image: {
    height: 54,
    width: 54,
    borderRadius: 27,
  },
});
