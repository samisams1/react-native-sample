import React, { useState } from "react";
import { Text, View, TextInput, Button, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
  
const Home = (props) => {
  const persons = [
    {
    id: "1",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    {
    id: "2",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    {
    id: "3",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    {
    id: "4",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    {
    id: "5",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    {
    id: "6",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    {
    id: "7",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    {
    id: "8",
    name: "React is known as ReactJs, which is a JavaScript library to build single-page web applications ",
    },
    
  ];
  return (
    <View style={{salignItems: "center", justifyContent: "center",marginTop:15, backgroundColor:"#f2eee6"}}>
      <ScrollView>
        <View>
              {persons.map((person) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center",margin:15, height:100,backgroundColor:"#fcfcfc",borderColor:"green",borderRadius:35 }}>
                <Text >{person.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

    </View>
  );
};
  
const HeaderButtonComponent = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color="#FFF"
    {...props}
  />
);
  
Home.navigationOptions = (navData) => {
  return {
    headerTitle: "Notifications",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Setting"
          iconName="ios-settings-outline"
          onPress={() => navData.navigation.navigate("Setting")}
        />
      </HeaderButtons>
    ),
  };
};

  
export default Home;