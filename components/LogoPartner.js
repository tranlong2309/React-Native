import { View, Image } from "react-native";
import React from "react";
import { TextStyle } from "../components";
import { colors } from "../constants";
export default function LogoPartner(props) {
  return (
    <View
      style={{ height: 90, width: 75, alignItems: "center", marginRight: 10 }}
    >
      <Image source={props.url} />
      <TextStyle
        style={{
          marginTop: 2,
          fontFamily: "Inter-Light",
          fontSize: 10,
          fontWeight: "600",
          color: colors.Color1,
        }}
        text={props.namePartner}
      />
    </View>
  );
}
