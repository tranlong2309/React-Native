import { Text } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_300Light,
} from "@expo-google-fonts/inter";

export default function TextStyle(props) {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_300Light,
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text numberOfLines={props.numberLines || 0} style={props.style}>
      {props.text}
    </Text>
  );
}
