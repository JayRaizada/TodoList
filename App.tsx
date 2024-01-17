import React from "react";
import TodoScreen from "./components/Todoscreen";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native'

function App() {
  return (
    <SafeAreaView>
      <TodoScreen />
    </SafeAreaView>)
}

export default App;

const style = StyleSheet.create({});