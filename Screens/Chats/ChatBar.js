import { View, Text } from "react-native";
import Avatar from "./Avatar";
import Feather from "react-native-vector-icons/Feather";
import React from "react";

export default function ChatBar(props) {
  const { url, sizeAvatar, name, textChat, hourChat, style } = props;
  return (
    <View style={[{ flexDirection: "row", alignItems: "center" }, style]}>
      <Avatar size={!sizeAvatar ? 50 : sizeAvatar} url={url} />
      <View style={{ paddingLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
        <Text style={{ opacity: 0.5 }}>
          You : {textChat} : {hourChat}
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <Feather name="check-circle" size={18} style={{ opacity: 0.5 }} />
    </View>
  );
}
