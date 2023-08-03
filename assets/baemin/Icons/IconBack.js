import { View } from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
export default function IconBack(props) {
  return (
    <View style={props.style}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G id="SWM Icon Set">
          <Path
            id="shape"
            d="M4 12L20 12M4 12L10 6M4 12L10 18"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
}
