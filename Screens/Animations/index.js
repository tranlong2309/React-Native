import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextStyle } from "../../components";

export default function Animations() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 140,
          height: 70,
          backgroundColor: "red",
          borderRadius: 20,
        }}
      >
        <TextStyle
          style={{ fontFamily: "Inter-Light", fontWeight: "400" }}
          text="long"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
