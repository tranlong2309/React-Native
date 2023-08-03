import { View, TouchableOpacity } from "react-native";
import React from "react";
import TextStyle from "./TextStyle";
import colors from "../constants/colors";

export default function UIButtonBaemin(props) {
  const { text, onPress } = props;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: colors.Color4,
          height: 37,
          borderRadius: 5,
          justifyContent: "center",
        }}
      >
        <TextStyle
          style={{
            fontFamily: "Inter-SemiBold",
            fontSize: 12,
            color: "#ffff",
            textAlign: "center",
            fontWeight: "600",
          }}
          text={text}
        />
      </TouchableOpacity>
    </View>
  );
}
