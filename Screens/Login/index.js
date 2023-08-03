import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login() {
  const [showPass, setShowPass] = useState(true);
  const [deleteAllTxt, setdeleteAllTxt] = useState(false);
  const [valueEmail, setValueEmail] = useState("");
  const [valuePass, setValuePass] = useState("");
  const navigate = useNavigation();
  const onChangeEmail = (value) => {
    setValueEmail(value);
    if (value != "") {
      setdeleteAllTxt(true);
    } else {
      setdeleteAllTxt(false);
    }
  };
  const TK = { email: "long@gmail.com", pass: "123321" };
  const checkAuth = () => {
    if (TK.email == valueEmail && TK.pass == valuePass) {
      navigate.navigate("chats");
    } else {
      alert("sai");
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.BTNbackhome}
        onPress={() => navigate.navigate("Main")}
      >
        <Icon name="chevron-left" style={styles.iconback} />
        <Text>Trở lại</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.TopTitle}>
          <Text style={styles.textTitle}>Chào mừng trở lại!</Text>
          <Text style={styles.text}>Rất vui mừng khi được gặp lại bạn!</Text>
        </View>
        <View style={styles.TTBody}>
          <Text style={styles.textTTTK}>THÔNG TIN TÀI KHOẢN</Text>
          <View style={[styles.Viewinput, styles.email]}>
            <TextInput
              placeholder="Email hoặc Số Điện Thoại"
              onChangeText={onChangeEmail}
              style={styles.input}
              placeholderTextColor={"#4e555e"}
              underlineColorAndroid="transparent"
              value={valueEmail}
            />
            <TouchableOpacity
              disabled={!deleteAllTxt}
              onPress={() => {
                setValueEmail("");
                setdeleteAllTxt(false);
              }}
            >
              <Icon
                style={deleteAllTxt ? styles.iconeye : styles.icondelete}
                name={"times-circle"}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.Viewinput, styles.pass]}>
            <TextInput
              value={valuePass}
              onChangeText={(value) => setValuePass(value)}
              placeholder="Mật khẩu"
              style={[styles.input]}
              placeholderTextColor={"#4e555e"}
              secureTextEntry={showPass}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Icon
                style={styles.iconeye}
                name={showPass ? "eye" : "eye-slash"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ width: 100 }}>
            <Text style={styles.textquenpass}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, styles.colorBtnDK]}
            onPress={checkAuth}
          >
            <Text style={styles.textButton}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 40,
  },
  BTNbackhome: {
    flexDirection: "row",
    width: 150,
    opacity: 0.5,
  },
  iconback: {
    paddingTop: 4.6,
    paddingRight: 6,
  },
  body: {
    flex: 1,
    marginHorizontal: 10,
  },
  TopTitle: {
    marginTop: 20,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    paddingTop: 6,
    textAlign: "center",
    paddingHorizontal: 55,
    fontSize: 11.4,
    color: "#4e5a69",
  },
  TTBody: {
    marginTop: 35,
  },
  textTTTK: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#",
    marginBottom: 8,
  },
  Viewinput: {
    backgroundColor: "#d5d5d5",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
  },
  input: {
    height: 20,
    paddingLeft: 15,
    width: 350,
  },
  pass: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  email: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  textquenpass: {
    color: "#096ded",
    fontSize: 10.5,
    marginVertical: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    height: 35,
  },
  textButton: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
  colorBtnDK: {
    marginTop: 10,
    backgroundColor: "#5865f2",
  },
  iconeye: {
    opacity: 0.5,
    fontSize: 20,
  },
  icondelete: {
    opacity: 0,
    fontSize: 20,
  },
});
