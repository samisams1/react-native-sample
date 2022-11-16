import React from "react";
import { createAppContainer } from "react-navigation";

import Home from "./src/screens/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import Setting from "./src/screens/SettingScreen";
import Social from "./src/screens/social";
  
const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Setting: Setting,
    Social: Social,

  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
        height:100,
        borderRadius:10,
        alignItems:"center",
        headerShown: false,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
        alignSelf: 'center',
        justifyContent: 'center'
        

      },
      headerTintColor: "#FFF",
    },
  },
  {
    initialRouteName: "Home",
  }
);
  
const Navigator = createAppContainer(AppNavigator);
  
export default function App() {
  return (
    <Navigator>
      <Home />
    </Navigator>
  );
}