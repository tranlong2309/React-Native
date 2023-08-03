import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import Avatar from "./Avatar";
import IconFeather from "./IconFeather";
import InputSeach from "./InputSeach";
import ChatBar from "./ChatBar";

export default function Chats() {
  const [profile, setProfile] = useState([
    {
      name: "Long",
      img: require("../../assets/img1.jpg"),
      status: "on",
    },
    {
      name: "Long 92",
      img: require("../../assets/img2.jpg"),
      status: "on",
    },
    {
      name: "Long 3",
      img: require("../../assets/img3.jpg"),
      status: "on",
    },
    {
      name: "Long 72",
      img: require("../../assets/SonGoKu.png"),
      status: "on",
    },
    {
      name: "Long11",
      img: require("../../assets/img1.jpg"),
      status: "on",
    },
    {
      name: "Long 12",
      img: require("../../assets/img2.jpg"),
      status: "on",
    },
    {
      name: "Long 13",
      img: require("../../assets/img3.jpg"),
      status: "on",
    },
    {
      name: "Long 112",
      img: require("../../assets/SonGoKu.png"),
      status: "on",
    },
  ]);
  const [chats, setChats] = useState([
    {
      name: "Tran Van Long 121",
      img: require("../../assets/img1.jpg"),
      newChat: "An com chua",
      hour: "17:37 PM",
    },
    {
      name: "Tran Van Long 28",
      img: require("../../assets/img2.jpg"),
      newChat: "An com chua",
      hour: "17:37 PM",
    },
    {
      name: "Tran Van Long 3",
      img: require("../../assets/img3.jpg"),
      newChat: "An com chua",
      hour: "09:37 AM",
    },
    {
      name: "Tran Van Long 4",
      img: require("../../assets/SonGoKu.png"),
      newChat: "An com chua",
      hour: "13:37 PM",
    },
    {
      name: "Tran Van Long56",
      img: require("../../assets/img1.jpg"),
      newChat: "An com chua",
      hour: "17:37 PM",
    },
    //
    {
      name: "Tran Van Long 11",
      img: require("../../assets/img1.jpg"),
      newChat: "An com chua",
      hour: "17:37 PM",
    },
    {
      name: "Tran Van Long 12",
      img: require("../../assets/img2.jpg"),
      newChat: "An com chua",
      hour: "17:37 PM",
    },
    {
      name: "Tran Van Long 13",
      img: require("../../assets/img3.jpg"),
      newChat: "An com chua",
      hour: "09:37 AM",
    },
    {
      name: "Tran Van Long 14",
      img: require("../../assets/SonGoKu.png"),
      newChat: "An com chua",
      hour: "13:37 PM",
    },
    {
      name: "Tran Van Long 16",
      img: require("../../assets/img1.jpg"),
      newChat: "An com chua",
      hour: "17:37 PM",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.viewSearch}>
        <View style={styles.settingSearch}>
          <View style={styles.ViewIcon}>
            <Avatar
              size={45}
              url={require("../../assets/Facebook-Avatar1.jpg")}
            />
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                paddingLeft: 12,
              }}
            >
              Chats
            </Text>
            <View style={{ flex: 1 }}></View>
            <IconFeather size={45} sizeIcon={23} nameIcon="camera" />
            <IconFeather
              style={{ marginLeft: 13, paddingLeft: 5 }}
              size={45}
              sizeIcon={23}
              nameIcon="edit"
            />
          </View>
          <InputSeach style={{ marginTop: 15 }} />
        </View>
      </View>
      <View style={styles.viewRow}>
        <View style={{ alignItems: "center" }}>
          <IconFeather size={50} sizeIcon={30} nameIcon="plus" />
          <Text style={{ opacity: 0.5 }}>Your story</Text>
        </View>
        <FlatList
          horizontal={true}
          data={profile}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <Avatar
                style={{ marginLeft: 25 }}
                size={52}
                url={item.img}
                status={item.status}
                textName={item.name}
              />
            );
          }}
        />
      </View>
      <View style={styles.viewBody}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <ChatBar
                style={{ marginBottom: 25 }}
                url={item.img}
                sizeAvatar={52}
                name={item.name}
                textChat={item.newChat}
                hourChat={item.hour}
              />
            );
          }}
        />
      </View>
      <View style={styles.viewFoodter}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  viewSearch: {
    flex: 2.3,
    marginHorizontal: 15,
  },
  viewRow: {
    flexDirection: "row",
    flex: 1.2,
    marginLeft: 10,
    paddingTop: 5,
  },
  viewBody: {
    flex: 6,
    paddingHorizontal: 15,
  },
  viewFoodter: {
    flex: 1,
    backgroundColor: "rgba(46, 138, 138, 1)",
  },
  settingSearch: {
    marginTop: 70,
  },
  ViewIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
});
