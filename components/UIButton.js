import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function UIButton(props) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={props.activeOpacity}
        style={[styles.button, styles.colorBtnDN, props.style]}
        onPress={() => navigation.navigate(props.navigate)}
      >
        <Text style={styles.textButton}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    height: 35,
  },
  textButton: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
});
