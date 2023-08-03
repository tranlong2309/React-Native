import { View } from "react-native";
import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
export default function IconChevronRight(props) {
  return (
    <View style={props.style}>
      <Svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M6 13.8334L11.3333 8.50008L6 3.16675"
          stroke={props.fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
