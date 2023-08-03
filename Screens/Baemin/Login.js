import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../constants/";
import Svg, { Path, G } from "react-native-svg";
import { Logosvg, PhoneIcon } from "../../assets/baemin";
import { images } from "../../constants/";
import { TextStyle, TextInputStyle } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 4,
              backgroundColor: colors.Color3,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Logosvg />
              <Image
                source={images.Image2}
                style={{ width: 218, height: 189, marginVertical: 20 }}
              />
              <TextStyle
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 12,
                  color: "#FFFFFF",
                }}
                text="Nóng giòn đây"
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Svg height={100} width={"100%"} viewBox="0 0 1440 350">
              <Path
                fill={colors.Color3}
                d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,101.3C840,75,960,85,1080,117.3C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              />
            </Svg>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TextStyle
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 16,
            color: colors.Color2,
            textAlign: "center",
          }}
          text="Nhập số điện thoại để sử dụng Baemin"
        />
        <TouchableOpacity onPress={() => navigate.navigate("LoginUser")}>
          <TextInputStyle
            placeholder="Nhập số điện thoại của bạn"
            editable={false}
            style={{ marginTop: 20 }}
          >
            <PhoneIcon style={{ paddingRight: 8, borderRightWidth: 0.5 }} />
          </TextInputStyle>
        </TouchableOpacity>
        <View style={{ margin: 20 }}>
          <TextStyle
            style={{
              fontSize: 10,
              color: colors.Color2,
              textAlign: "center",
              fontFamily: "Inter-Light",
              fontWeight: "400",
              marginVertical: 20,
            }}
            text="Hoặc sử dụng"
          />
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Icon name="google" size={24} color={colors.Color2} />
            <MaterialIcons
              style={{ marginHorizontal: 24 }}
              size={24}
              color={colors.Color2}
              name="facebook"
            />
            <Icon size={24} color={colors.Color2} name="apple" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flex: 1 },
  bottom: { flex: 1, marginHorizontal: 15 },
});
