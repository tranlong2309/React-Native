import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "./Screens/Main";
import Login from "./Screens/Baemin/Login";
import Home from "./Screens/Baemin/Home";
import Register from "./Screens/Register";
import Chats from "./Screens/Chats";
import LoginUser from "./Screens/Baemin/LoginUser";
import Purchase from "./Screens/Baemin/Purchase";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginUser" component={LoginUser} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Purchase" component={Purchase} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="chats" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
