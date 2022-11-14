import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ToggleButton } from 'react-native-paper';
import { Switch } from 'react-native-paper';

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(true);
const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
  return (
    <View style={styles.container}>
  <Text style={styles.headerText}>Recommended </Text>
<View style={styles.row}>
<Text style={styles.detailText}>Social Notifications   </Text>  
  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#0000FF"  style={styles.toogle} />
</View>
<View style={styles.row}>
  <Text  style={styles.detailText} >Sales,Discounts and more </Text>
  <Switch value={isSwitchOn1} onValueChange={onToggleSwitch1} color="#0000FF" style={styles.toogle}/>
  
  </View>
  <View style={styles.row}>
  <Text style={styles.detailText}>Sales,Discounts and more </Text>
  <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} color="#0000FF" style={styles.toogle}/>
  
  </View>
    </View>
  );

};

  
Settings.navigationOptions = (navData) => {
  return {
    headerTitle: "Notification Settings", 
  };
};
export default Settings;
const styles = StyleSheet.create({
  container:{
   marginTop:10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  headerText:{
    color:"black",
    fontWeight:50,
    fontFamily: "Raleway", 
    fontStyle: "bold", 
    fontWeight: "600", 
  },
  toogle:{
    justifyContent: 'right',
  },
  detailText:{
    marginTop:10,
  }
})
