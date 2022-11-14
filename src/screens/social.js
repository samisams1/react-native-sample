import React, { useEffect, useState } from "react";
import { StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";



  
const Social = (props) => {
    const DATA = [ 'first row','second row','third row','fourth row','fifth row','sixth row','seventh row','Eight row','Nine row'
,'Tenth row'];

 const [data,setData] = useState([]);
 useEffect(() => {
  fetch('http://localhost:9090/feedbacks')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));
}, []);

  return (
    <View style={styles.container_style}>
      <FlatList 
        data={DATA}
        renderItem={({item}) =>
        <View style={styles.item_style}>
           <View style={styles.row}> 
           <Text style={styles.title}>{item}</Text>    
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
  
Home.navigationOptions = (navData) => {
  return {
    headerTitle: "Notifications",
    HeaderButtons: () =>{
      <Item
      title="Setting"
      iconName="ios-settings-outline"
      onPress={() => navData.navigation.navigate("Setting")}
    />
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Setting"
          iconName="ios-settings-outline"
          onPress={() => navData.navigation.navigate("Setting")}
        />
      </HeaderButtons>
    ),
    headerRight: (
        <Button
        title = "Test"
        onPress = {() => this.params.handleSave()}/>
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
});