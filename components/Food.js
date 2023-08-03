import { View, Image } from "react-native";
import React from "react";
import { TextStyle } from "../components";
import { colors } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Food(props) {
  const { url, namefood, address, evaluate, price, distance } = props;
  return (
    <View
      style={{ marginHorizontal: 15, flexDirection: "row", marginBottom: 8 }}
    >
      <Image style={{ width: 75, height: 75, borderRadius: 5 }} source={url} />
      <View
        style={{
          width: 250,
          height: 75,
          marginLeft: 16,
        }}
      >
        <TextStyle
          numberLines={1}
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 16,
            color: colors.Color1,
            marginRight: 10,
          }}
          text={namefood}
        />
        <TextStyle
          numberLines={1}
          style={{
            fontFamily: "Inter-Light",
            fontSize: 10,
            fontWeight: "400",
            color: colors.Color1,
          }}
          text={address}
        />
        <TextStyle
          style={{
            fontFamily: "Inter-Light",
            fontSize: 10,
            fontWeight: "400",
            color: colors.Color1,
          }}
          text={price}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            style={{
              color: "#FFD80C",
            }}
            name="star"
          />
          <TextStyle
            style={{
              fontFamily: "Inter-Light",
              fontSize: 10,
              fontWeight: "400",
              color: colors.Color1,
              marginRight: 30,
            }}
            text={evaluate}
          />
          <TextStyle
            style={{
              fontFamily: "Inter-Light",
              fontSize: 10,
              fontWeight: "400",
              color: colors.Color1,
            }}
            text={distance}
          />
        </View>
      </View>
    </View>
  );
}
