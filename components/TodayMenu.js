import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { IconArrowRight } from "../assets/baemin";
import { TextStyle } from "../components";
import { colors } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function TodayMenu(props) {
  const { url, namefood, price } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Purchase")}
    >
      <View
        style={{
          width: 230,
          height: 320,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#F4F4F4",
          marginRight: 10,
        }}
      >
        <Image
          style={{
            width: 227,
            height: 240,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={url}
        />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 5,
            marginTop: 10,
          }}
        >
          <Icon
            style={{
              color: "#FFD80C",
              alignSelf: "center",
              marginRight: 2,
            }}
            name="star"
          />
          <TextStyle
            style={{
              fontFamily: "Inter-Light",
              fontSize: 10,
              fontWeight: "400",
              color: "#A1A1A1",
            }}
            text="Thực đơn hôm nay"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 5,
            marginVertical: 1,
          }}
        >
          <TextStyle
            numberLines={1}
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: 16,
              color: colors.Color1,
            }}
            text={namefood}
          />
          <IconArrowRight style={{ alignSelf: "center" }} />
        </View>
        <TextStyle
          style={{
            fontFamily: "Inter-Light",
            fontSize: 10,
            fontWeight: "400",
            color: colors.Color1,
            marginHorizontal: 5,
          }}
          text={"Chỉ từ " + price}
        />
      </View>
    </TouchableOpacity>
  );
}
