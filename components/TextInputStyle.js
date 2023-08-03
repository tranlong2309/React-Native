import { View, TextInput } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { PhoneIcon } from "../assets/baemin";
import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_300Light,
} from "@expo-google-fonts/inter";

export default function TextInputStyle(props) {
  const {
    children,
    placeholder,
    keyboardType,
    style,
    editable,
    autoFocus,
    secureTextEntry,
  } = props;
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={[
        {
          flexDirection: "row",
          height: 60,
          borderRadius: 10,
          alignItems: "center",
          paddingHorizontal: 24,
          borderWidth: 0.75,
          borderColor: "#A1A1A1",
        },
        style,
      ]}
    >
      {children}
      <TextInput
        autoFocus={autoFocus}
        editable={editable}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={{
          width: 180,
          height: 23,
          fontSize: 13,
          paddingLeft: 8,
        }}
        placeholder={placeholder}
      />
    </View>
  );
}
