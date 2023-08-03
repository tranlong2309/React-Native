import { View } from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
export default function IconArrowRight(props) {
  return (
    <View style={props.style}>
      <Svg
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M13.3334 8.5L2.66669 8.5M13.3334 8.5L9.33335 12.5M13.3334 8.5L9.33336 4.5"
          stroke="#07332F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
