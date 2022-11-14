import React, { useEffect, useState } from "react";
import { StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
import FeedbackQuery from "./api";
  
const Social = (props) => {
const {data } = FeedbackQuery(); 
  return (
    <View style={styles.container_style}>
      <FlatList 
        data={data}
        renderItem={({item}) =>
        <View style={styles.item_style}>
           <View style={styles.row}> 
           <Text style={styles.title}>{item.title}</Text>    
           <Text style={styles.post_time} >30m</Text>
           </View>
           <Text >{item.content}</Text>
        </View>
            }
      />
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
  
Social.navigationOptions = (navData) => {
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
    headerRight: () => (
      <View style={styles.row}>
      <View style={styles.roundButton1}>  
 <TouchableOpacity
        style={styles.roundButton1}
        onPress={() => navData.navigation.navigate('home')}>
        <Text    style={styles.textColor}>Brewsy</Text>
      </TouchableOpacity>

      </View>
      <View>
      <TouchableOpacity
        onPress={() => navData.navigation.navigate('Social')}>
        <Text    style={styles.textColor}>Social</Text>
      </TouchableOpacity>
      </View>
        </View>
    ),
    
  };
};
export default Social;
//Styles 
const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item_style: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
   
     margin:15,
      height:80,
      backgroundColor:"#fcfcfc",
      borderColor:"green",
      borderRadius:35 

  },header: {
    textAlign: 'center',
    backgroundColor: '#B2C2D2',
    padding: 20,
    fontSize: 20,
   
  },
  title:{
    fontWeight:900,
    alignItems:"left",
    justifyContent: "center",
  },
  post_time:{
    justifyContent: 'right',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  roundButton1: {
    width: 100,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#F65A0C',
  },
  textColor :{
    color:'#FFFFFF',
    fontWeight:900,
    fontSize:15  
  }
});