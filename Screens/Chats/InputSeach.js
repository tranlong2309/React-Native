import { View, Text, TextInput } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
export default function InputSeach(props) {
  return (
    <View
      style={[
        {
          backgroundColor: "#f5f5f5",
          height: 35,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        },
        props.style,
      ]}
    >
      <Feather
        style={{ opacity: 0.5, paddingHorizontal: 5 }}
        size={20}
        name="search"
      />
      <TextInput style={{ flex: 1, fontSize: 17 }} placeholder="Search" />
    </View>
  );
}
