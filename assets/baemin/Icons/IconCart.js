import { View } from "react-native";
import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
export default function IconCart(props) {
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
            d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H7.36729C6.86964 17 6.44772 16.6341 6.37735 16.1414L6.07143 14M2 3H4.5L4.78571 5M4.78571 5H5H21L18 14H6.5H6.07143M4.78571 5L6.07143 14M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
            stroke="#07332F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Circle id="Ellipse 5" cx="20" cy="5.70044" r="4" fill="#F27B39" />
        </G>
      </Svg>
    </View>
  );
}
