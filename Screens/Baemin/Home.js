import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import React, { useState } from "react";
import {
  IconMap,
  IconCart,
  IconMenu,
  IconChevronRight,
} from "../../assets/baemin";
import { LogoPartner, TextStyle, TodayMenu, Food } from "../../components";
import { colors, images } from "../../constants";

export default function Home() {
  const [menuToday, setMenuToday] = useState([
    {
      id: 1,
      namefood: "Cơm Ba Ghiên - Nguyễn Văn Trỗi",
      url: require("../../assets/baemin/food/food1.jpeg"),
      price: "40.000",
    },
    {
      id: 2,
      namefood: "Bún Thịt Nướng Dì 7",
      url: require("../../assets/baemin/food/food2.jpg"),
      price: "39.000",
    },
    {
      id: 3,
      namefood: "Gỏi Cuốn",
      url: require("../../assets/baemin/food/food3.jpg"),
      price: "6.000",
    },
    {
      id: 4,
      namefood: "Hủ Tiếu Nam Vang",
      url: require("../../assets/baemin/food/food4.jpeg"),
      price: "70.000",
    },
    {
      id: 5,
      namefood: "Mỳ Ý 4B",
      url: require("../../assets/baemin/food/food5.jpeg"),
      price: "30.000",
    },
  ]);
  const [sale, setSale] = useState([
    {
      id: 1,
      url: require("../../assets/baemin/sale/image15.png"),
    },
    {
      id: 2,
      url: require("../../assets/baemin/sale/image18.png"),
    },
    {
      id: 3,
      url: require("../../assets/baemin/sale/image20.png"),
    },
    {
      id: 4,
      url: require("../../assets/baemin/sale/image21.png"),
    },
    {
      id: 5,
      url: require("../../assets/baemin/sale/image15.png"),
    },
    {
      id: 6,
      url: require("../../assets/baemin/sale/image18.png"),
    },
    {
      id: 7,
      url: require("../../assets/baemin/sale/image20.png"),
    },
    {
      id: 8,
      url: require("../../assets/baemin/sale/image21.png"),
    },
  ]);
  const [discount, setDiscount] = useState([
    {
      id: 1,
      url: require("../../assets/baemin/sale/image2.png"),
    },
    {
      id: 2,
      url: require("../../assets/baemin/sale/image1.png"),
    },
    {
      id: 3,
      url: require("../../assets/baemin/sale/image3.png"),
    },
  ]);
  const [discount1, setDiscount1] = useState([
    {
      id: 1,
      url: require("../../assets/baemin/discount/img1.png"),
    },
    {
      id: 2,
      url: require("../../assets/baemin/discount/img2.png"),
    },
    {
      id: 3,
      url: require("../../assets/baemin/discount/img3.png"),
    },
    {
      id: 4,
      url: require("../../assets/baemin/discount/img4.png"),
    },
  ]);
  const [partner, setPartner] = useState([
    {
      id: 1,
      url: require("../../assets/baemin/Partner/image24.png"),
      name: "Mr. Kimbap",
    },
    {
      id: 2,
      url: require("../../assets/baemin/Partner/image25.png"),
      name: "Mukbang",
    },
    {
      id: 3,
      url: require("../../assets/baemin/Partner/image23.png"),
      name: "Gogi",
    },
    {
      id: 4,
      url: require("../../assets/baemin/Partner/image22.png"),
      name: "Nam Thanh",
    },
    {
      id: 5,
      url: require("../../assets/baemin/Partner/image24.png"),
      name: "Mr. Kimbap",
    },
    {
      id: 6,
      url: require("../../assets/baemin/Partner/image23.png"),
      name: "Gogi",
    },
  ]);
  const [food, setFood] = useState([
    {
      id: 1,
      url: require("../../assets/baemin/food/food7.jpeg"),
      namefood: "Cơm Gà Xối Mỡ 142 - Ba Đình",
      address: "142 Ba Đình, P. 10, Quận 8, TP. HCM",
      evaluate: "4.3(999+)",
      price: "20,000 - 55,000",
      distance: "0.9km",
    },
    {
      id: 2,
      url: require("../../assets/baemin/food/food8.jpg"),
      namefood: "Bánh Tráng Chấm Cô Gánh - Chung Cư A4 Phan Xích Long",
      address: "Lô D001 Chung Cư A4 Phan xích Long, P. 7, Phú Nhuận, TP. HCM",
      evaluate: "4.3(999+)",
      price: "1,000 - 20,000",
      distance: "0.5km",
    },
    {
      id: 3,
      url: require("../../assets/baemin/food/food9.jpg"),
      namefood: "Bánh Mì Huynh Hoa - Bánh Mì Pate",
      address: "26 Lê Thị Riêng, P. Bến Thành, Quận 1, TP. HCM",
      evaluate: "4.5(999+)",
      price: "38,000 - 38,000",
      distance: "1km",
    },
    {
      id: 4,
      url: require("../../assets/baemin/food/food10.jpeg"),
      namefood: "Cơm Tấm Ba Ghiền Không Chi Nhánh - 84 Đặng Văn Ngữ",
      address: "84 Đặng Văn Ngữ, P. 10, Phú Nhuận, TP. HCM",
      evaluate: "4.5(999+)",
      price: "40,000 - 66,000",
      distance: "1.2km",
    },
    {
      id: 5,
      url: require("../../assets/baemin/food/food12.jpeg"),
      namefood: "Hanuri - Quán Ăn Hàn Quốc - Cộng Hòa",
      address: "51 Cộng Hòa, P. 4, Tân Bình, TP. HCM",
      evaluate: "4.5(999+)",
      price: "50,000 - 110,000",
      distance: "1.5km",
    },
    {
      id: 6,
      url: require("../../assets/baemin/food/food13.jpeg"),
      namefood: "Gà Rán Popeyes - Lê Đại Hành",
      address: "397A Lê Đại Hành, P. 11, Quận 11, TP. HCM",
      evaluate: "4.5(999+)",
      price: "30,000 - 170,000",
      distance: "0.5km",
    },
    {
      id: 7,
      url: require("../../assets/baemin/food/food7.jpeg"),
      namefood: "Cơm Gà Xối Mỡ 142 - Ba Đình",
      address: "142 Ba Đình, P. 10, Quận 8, TP. HCM",
      evaluate: "4.3(999+)",
      price: "20,000 - 55,000",
      distance: "0.9km",
    },
    {
      id: 8,
      url: require("../../assets/baemin/food/food8.jpg"),
      namefood: "Bánh Tráng Chấm Cô Gánh - Chung Cư A4 Phan Xích Long",
      address: "Lô D001 Chung Cư A4 Phan xích Long, P. 7, Phú Nhuận, TP. HCM",
      evaluate: "4.3(999+)",
      price: "1,000 - 20,000",
      distance: "0.5km",
    },
    {
      id: 9,
      url: require("../../assets/baemin/food/food9.jpg"),
      namefood: "Bánh Mì Huynh Hoa - Bánh Mì Pate",
      address: "26 Lê Thị Riêng, P. Bến Thành, Quận 1, TP. HCM",
      evaluate: "4.5(999+)",
      price: "38,000 - 38,000",
      distance: "1km",
    },
    {
      id: 10,
      url: require("../../assets/baemin/food/food10.jpeg"),
      namefood: "Cơm Tấm Ba Ghiền Không Chi Nhánh - 84 Đặng Văn Ngữ",
      address: "84 Đặng Văn Ngữ, P. 10, Phú Nhuận, TP. HCM",
      evaluate: "4.5(999+)",
      price: "40,000 - 66,000",
      distance: "1.2km",
    },
    {
      id: 11,
      url: require("../../assets/baemin/food/food12.jpeg"),
      namefood: "Hanuri - Quán Ăn Hàn Quốc - Cộng Hòa",
      address: "51 Cộng Hòa, P. 4, Tân Bình, TP. HCM",
      evaluate: "4.5(999+)",
      price: "50,000 - 110,000",
      distance: "1.5km",
    },
    {
      id: 12,
      url: require("../../assets/baemin/food/food13.jpeg"),
      namefood: "Gà Rán Popeyes - Lê Đại Hành",
      address: "397A Lê Đại Hành, P. 11, Quận 11, TP. HCM",
      evaluate: "4.5(999+)",
      price: "30,000 - 170,000",
      distance: "0.5km",
    },
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffff" }}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <IconMap />
          <TextStyle
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: 16,
              color: colors.Color1,
            }}
            text="471 Hai Bà Trưng"
          />
          <View style={{ flex: 1 }} />
          <IconCart style={{ color: colors.Color1, paddingRight: 10 }} />
          <IconMenu />
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F4F4F4",
            paddingLeft: 8,
            borderRadius: 50,
          }}
        >
          <Image
            source={images.ImageSeachSmall}
            style={{ alignSelf: "center" }}
          />
          <TextInput
            autoCorrect={false}
            style={{ paddingLeft: 4, fontSize: 10, width: 300, height: 35 }}
            placeholder="Tìm nhà hàng, món ăn"
          />
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View>
            <FlatList
              style={{ paddingHorizontal: 15 }}
              horizontal={true}
              data={menuToday}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TodayMenu
                    namefood={item.namefood}
                    url={item.url}
                    price={item.price}
                  />
                );
              }}
            />
          </View>
          <View
            style={{
              marginTop: 12,
              height: 4,
              backgroundColor: "#E7E7E7",
              marginVertical: 5,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
              marginVertical: 5,
            }}
          >
            <TextStyle
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 16,
                color: colors.Color1,
              }}
              text="SALE LỚN MÙA EURO"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <View
                style={{
                  width: 21,
                  height: 15,
                  backgroundColor: colors.Color1,
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <TextStyle
                  style={{
                    fontFamily: "Inter-Light",
                    fontWeight: "300",
                    fontStyle: "italic",
                    fontSize: 12,
                    alignSelf: "center",
                    color: "#FFFFFF",
                  }}
                  text="12"
                />
              </View>
              <Text style={{ color: colors.Color1 }}>:</Text>
              <View
                style={{
                  width: 21,
                  height: 15,
                  backgroundColor: colors.Color1,
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <TextStyle
                  style={{
                    fontFamily: "Inter-Light",
                    fontWeight: "300",
                    fontStyle: "italic",
                    fontSize: 12,
                    alignSelf: "center",
                    color: "#FFFFFF",
                  }}
                  text="12"
                />
              </View>
              <Text style={{ color: colors.Color1 }}>:</Text>
              <View
                style={{
                  width: 21,
                  height: 15,
                  backgroundColor: colors.Color1,
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <TextStyle
                  style={{
                    fontFamily: "Inter-Light",
                    fontWeight: "300",
                    fontStyle: "italic",
                    fontSize: 12,
                    alignSelf: "center",
                    color: "#FFFFFF",
                  }}
                  text="12"
                />
              </View>
            </View>
            <View style={{ flex: 1 }} />
            <IconChevronRight fill={colors.Color1} />
          </View>
          <View>
            <FlatList
              style={{ paddingLeft: 15 }}
              horizontal={true}
              data={sale}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={{
                      width: 75,
                      height: 75,
                      borderRadius: 15,
                      marginRight: 8,
                    }}
                    source={item.url}
                  />
                );
              }}
            />
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: "#E7E7E7",
              marginTop: 15,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
              marginVertical: 7,
            }}
          >
            <TextStyle
              style={{
                fontFamily: "Inter-SemiBold",
                fontWeight: "600",
                fontSize: 12,
                color: colors.Color7,
                marginRight: 10,
              }}
              text="Bạn ơi, 3 mã giảm giá vẫy gọi nè"
            />
            <Image source={require("../../assets/baemin/Icons/image4.png")} />
            <View style={{ flex: 1 }} />
            <IconChevronRight fill={colors.Color7} />
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: "#E7E7E7",
            }}
          />
          <View>
            <FlatList
              style={{ paddingLeft: 15, marginVertical: 10 }}
              horizontal={true}
              data={discount}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={{
                      width: 288,
                      height: 154,
                      borderRadius: 15,
                      marginRight: 7,
                    }}
                    source={item.url}
                  />
                );
              }}
            />
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: "#E7E7E7",
            }}
          />
          <View style={{ marginVertical: 10 }}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                alignItems: "center",
              }}
            >
              <TextStyle
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 16,
                  color: colors.Color1,
                  marginRight: 10,
                }}
                text="TOP KHUYẾN MÃI"
              />
              <Image source={require("../../assets/baemin/Icons/image5.png")} />
              <View style={{ flex: 1 }} />
              <IconChevronRight fill={colors.Color1} />
            </View>
            <View>
              <FlatList
                style={{ paddingLeft: 15, marginVertical: 7 }}
                horizontal={true}
                data={discount1}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <Image
                      style={{
                        width: 120,
                        height: 75,
                        marginRight: 10,
                        borderRadius: 15,
                      }}
                      source={item.url}
                    />
                  );
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: "#E7E7E7",
            }}
          />
          <View
            style={{
              marginRight: 20,
              height: 200,
              marginVertical: 10,
              backgroundColor: colors.Color4,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 15,
            }}
          >
            <View style={{ width: 105 }}>
              <TextStyle
                style={{
                  fontFamily: "Inter_700Bold",
                  fontSize: 24,
                  color: colors.Color1,
                }}
                text="DIMSUM THẢ GA"
              />
              <TextStyle
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 10,
                  fontWeight: "400",
                  color: colors.Color1,
                }}
                text="Freeship với đơn từ 59K"
              />
              <TextStyle
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 10,
                  fontWeight: "400",
                  color: colors.Color1,
                }}
                text="Khuyến mãi 15K"
              />
            </View>
            <Image source={require("../../assets/baemin/food/food6.png")} />
            <IconChevronRight fill={colors.Color1} />
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: "#E7E7E7",
            }}
          />
          <View style={{ marginVertical: 10 }}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                alignItems: "center",
              }}
            >
              <TextStyle
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 16,
                  color: colors.Color1,
                  marginRight: 10,
                }}
                text="NHÀ HÀNG TRIỂN VỌNG"
              />
              <View style={{ flex: 1 }} />
              <IconChevronRight fill={colors.Color1} />
            </View>
            <FlatList
              style={{ paddingLeft: 15, marginVertical: 7 }}
              horizontal={true}
              data={partner}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <LogoPartner url={item.url} namePartner={item.name} />;
              }}
            />
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: "#E7E7E7",
            }}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <TextStyle
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 16,
                  color: colors.Color1,
                  marginRight: 10,
                }}
                text="QUANH ĐÂY CÓ GÌ NGON ?"
              />
              <View style={{ flex: 1 }} />
              <IconChevronRight fill={colors.Color1} />
            </View>
          </View>
          {food.map((item) => (
            <Food
              url={item.url}
              namefood={item.namefood}
              address={item.address}
              evaluate={item.evaluate}
              price={item.price}
              distance={item.distance}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    justifyContent: "center",
    marginHorizontal: 15,
    marginTop: 30,
  },
  body: { flex: 1 },
});
