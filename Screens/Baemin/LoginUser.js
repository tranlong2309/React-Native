import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Path, Svg } from "react-native-svg";
import { colors } from "../../constants";
import { IconBack, Logosvg, PhoneIcon, IconPen } from "../../assets/baemin";
import { useNavigation } from "@react-navigation/native";
import {
  TextStyle,
  TextInputStyle,
  IButtonBaemin,
  KeyboardAvoidingWrapper,
} from "../../components";

export default function LoginUser() {
  const navigator = useNavigation();
  return (
    <KeyboardAvoidingWrapper>
      <View style={{ flex: 1 }}>
        <View style={styles.hedder}>
          <View
            style={{
              height: 100,
              backgroundColor: colors.Color3,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigator.goBack()}>
                <IconBack />
              </TouchableOpacity>
              <Logosvg />
              <View />
            </View>
          </View>
          <View>
            <Svg height={100} width={"100%"} viewBox="0 0 1440 350">
              <Path
                fill={colors.Color3}
                d="M0,128L48,160C96,192,192,256,288,234.7C384,213,480,107,576,85.3C672,64,768,128,864,165.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </Svg>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <TextStyle
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 16,
                color: colors.Color2,
                textAlign: "center",
              }}
              text="Hãy nhập số điện thoại vào ô trên nhé!"
            />
            <TextInputStyle
              autoFocus={true}
              placeholder="Nhập số điện thoại của bạn"
              editable={true}
              keyboardType="numeric"
              style={{ marginTop: 20 }}
            >
              <PhoneIcon style={{ paddingRight: 8, borderRightWidth: 0.5 }} />
            </TextInputStyle>
            <TextInputStyle
              placeholder="Mật khẩu"
              editable={true}
              secureTextEntry={true}
              style={{ marginTop: 15 }}
            >
              <IconPen style={{ paddingRight: 8, borderRightWidth: 0.5 }} />
            </TextInputStyle>
          </View>
        </View>
        <View style={styles.foodter}>
          <IButtonBaemin
            onPress={() => navigator.navigate("Home")}
            text="Sử dụng Baemin"
          />
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  hedder: {
    flex: 5,
  },
  foodter: {
    flex: 0.5,
    marginHorizontal: 15,
  },
});
