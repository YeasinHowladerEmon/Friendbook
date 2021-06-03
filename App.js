import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "./components/TopBar.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello I am there and you are here! aren't you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
