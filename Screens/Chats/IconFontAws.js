import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
export default function IconFontAws(props) {
  const { size, sizeIcon, nameIcon, style } = props;
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          backgroundColor: "#f5f5f5",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Icon size={sizeIcon} name={nameIcon} />
    </View>
  );
}
