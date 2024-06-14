import { View, Text, SafeAreaView, StyleSheet } from "react-native";
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
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 30,
  },
  header: {},
  text1: {},
  text2: {},
});
