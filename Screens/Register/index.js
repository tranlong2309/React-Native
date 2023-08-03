import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Register() {
  const navigate = useNavigation();
  const [button, setButton] = useState(true);
  const [valueDT, setValueDT] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [hiddenDelete, setHiddenDelete] = useState(true);
  const handChangeText = (value) => {
    setValueEmail(value);
    if (value != "") {
      setHiddenDelete(false);
    } else {
      setHiddenDelete(true);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => navigate.navigate("Main")}
      >
        <Icon style={styles.iconback} name="chevron-left" />
        <Text>Trở lại</Text>
      </TouchableOpacity>
      <View style={styles.container_body}>
        <Text style={styles.title}>Nhập số điện thoại hoặc email</Text>
        <View style={styles.viewBTN}>
          <TouchableOpacity
            onPress={() => setButton(!button)}
            style={[
              styles.btnPhone,
              { backgroundColor: button ? "white" : "#d5d5d5" },
            ]}
          >
            <Text style={[styles.textBTN, !button && { opacity: 0.5 }]}>
              Điện thoại
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setButton(!button)}
            style={[
              styles.btnEmail,
              { backgroundColor: button ? "#d5d5d5" : "white" },
            ]}
          >
            <Text style={[styles.textBTN, button && { opacity: 0.5 }]}>
              Email
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewBody}>
          <Text style={styles.textSDT}>
            {button ? "SỐ ĐIỆN THOẠI" : "EMAIL"}
          </Text>
          {button ? (
            <View style={styles.viewInput}>
              <TouchableOpacity style={styles.btnMaDT}>
                <Text style={styles.textMaDT}>US +1</Text>
              </TouchableOpacity>
              <TextInput placeholder="Số Điện Thoại" style={styles.InputDT} />
              <TouchableOpacity>
                <Icon style={styles.iconDelete} name="times-circle" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.viewInput}>
              <TextInput
                value={valueEmail}
                onChangeText={handChangeText}
                placeholder="Email"
                style={styles.InputEMail}
              />
              <TouchableOpacity
                onPress={() => {
                  setValueEmail("");
                  setHiddenDelete(true);
                }}
              >
                <Icon
                  style={[
                    styles.iconDelete,
                    hiddenDelete ? { opacity: 0 } : { opacity: 0.6 },
                  ]}
                  name="times-circle"
                />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.CSQR}>
            <Text style={{ fontSize: 11, color: "#096ded", fontWeight: "500" }}>
              Xem Chính Sách Quyền Riêng Tư của Discord
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, styles.colorBtnDK]}
          >
            <Text style={styles.textButton}>Tiếp theo</Text>
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
    backgroundColor: "white",
  },
  btnBack: {
    flexDirection: "row",
    marginTop: 40,
    opacity: 0.5,
    width: 150,
  },
  iconback: {
    paddingTop: 4.2,
    paddingRight: 4,
  },
  container_body: {
    flex: 1,
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewBTN: {
    marginTop: 25,
    flexDirection: "row",
    backgroundColor: "#d5d5d5",
    borderRadius: 6,
    height: 27,
  },
  btnPhone: {
    margin: 1,
    width: "50%",
    height: 24.5,
    backgroundColor: "white",
    borderRadius: 6,
  },
  textBTN: {
    paddingTop: 3.5,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnEmail: {
    marginVertical: 1,
    marginHorizontal: 1,
    width: "49%",
    height: 24.5,
    borderRadius: 6,
  },
  viewBody: {
    marginTop: 20,
  },
  textSDT: {
    fontSize: 10.5,
    fontWeight: "bold",
    opacity: 0.7,
  },
  viewInput: {
    marginTop: 8,
    flexDirection: "row",
    backgroundColor: "#d5d5d5",
    height: 40,
    borderRadius: 4,
  },
  btnMaDT: {
    paddingHorizontal: 10,
    borderRightWidth: 0.5,
    borderRightColor: "#87909c",
  },
  textMaDT: {
    paddingTop: 10,
    fontSize: 13,
    fontWeight: "bold",
    opacity: 0.8,
  },
  InputDT: {
    paddingLeft: 10,
    fontSize: 13,
    width: "77%",
  },
  InputEMail: {
    paddingLeft: 10,
    fontSize: 13,
    width: "92%",
  },
  iconDelete: {
    fontSize: 17,
    paddingTop: 11,
    paddingLeft: 5,
  },
  CSQR: {
    marginVertical: 10,
    width: 230,
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
});
