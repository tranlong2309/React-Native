import { View } from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
export default function PhoneIcon(props) {
  return (
    <View style={props.style}>
      <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G id="SWM Icon Set">
          <Path
            id="shape"
            d="M13.9996 10.9844V12.791C14.0024 13.4815 13.3815 14.0582 12.6843 13.9953C6.66667 14 2 9.28999 2.00471 3.31279C1.94192 2.6193 2.51572 2.00071 3.20541 2.00006H5.0155C5.30832 1.99718 5.59219 2.10067 5.81421 2.29123C6.44542 2.833 6.85142 4.67185 6.69521 5.40285C6.57325 5.97358 5.99794 6.37286 5.6068 6.76323C6.46572 8.27079 7.71643 9.51903 9.22698 10.3763C9.61812 9.98589 10.0182 9.41171 10.5901 9.28999C11.3236 9.13385 13.1743 9.54043 13.7139 10.176C13.9053 10.4014 14.0069 10.6891 13.9996 10.9844Z"
            stroke="#A2A2A2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
}
