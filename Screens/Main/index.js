import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { images } from "../../constants";
import { UIButton } from "../../components";
export default function Main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.header}>
          <Image style={styles.logo} source={images.logo}></Image>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.image}
            source={require("../../assets/zyro-image.png")}
          ></Image>
        </View>
        <View style={{ flex: 3 }}>
          <Text style={styles.textTitle}>Chào mừng bạn đến với Discord</Text>
          <Text style={styles.text}>
            Tham gia cùng hơn 100 triệu người dùng Discord và trò chuyện với bạn
            vè và các cộng đồng khác nhau.
          </Text>
          <UIButton
            activeOpacity={0.7}
            text="Đăng Ký"
            style={styles.colorBtnDK}
            navigate="Register"
          />
          <UIButton
            activeOpacity={0.7}
            text="Đăng Nhập"
            style={styles.colorBtnDN}
            navigate="Login"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 1,
  },
  header: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 50,
  },
  body: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 370,
    height: 300,
    marginHorizontal: 5,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 20,
  },
  text: {
    paddingTop: 5,
    textAlign: "center",
    paddingHorizontal: 55,
    fontSize: 12,
    color: "#4e5a69",
  },
  colorBtnDK: {
    marginTop: 40,
    backgroundColor: "#5865f2",
  },
  colorBtnDN: {
    marginTop: 10,
    backgroundColor: "#5a6778",
  },
});
