import { View, ImageBackground, Text } from "react-native";
import React from "react";

export default function Avatar(props) {
  const { size, url, status, textName, style } = props;
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: 100,
          alignItems: "center",
        },
        style,
      ]}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 100 }}
        style={{
          width: size,
          height: size,
          borderRadius: 100,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
        source={url}
      >
        {status != null && (
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#5ad439",
              borderRadius: 100,
              borderColor: "#fff",
              borderWidth: 3,
            }}
          ></View>
        )}
      </ImageBackground>
      {textName && <Text style={{ opacity: 0.5 }}>{textName}</Text>}
    </View>
  );
}
