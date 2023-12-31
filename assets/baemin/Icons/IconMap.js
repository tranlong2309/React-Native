import { View } from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
export default function IconMap(props) {
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
          <G id="shape">
            <Path
              d="M20 11C20 15.4183 16.4183 19 12 21C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11Z"
              fill="#07332F"
            />
            <Path
              d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
              fill="#07332F"
            />
            <Path
              d="M20 11C20 15.4183 16.4183 19 12 21C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
}
