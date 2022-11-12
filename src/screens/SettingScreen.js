import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton,ToggleButton } from 'react-native-paper';
import { Switch } from 'react-native-paper';

const Settings = () => {
  const [checked, setChecked] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={{  justifyContent: "center" }}>
  <Text>Recommended 

    
  </Text>
  <Text>Social Notifications 

  <Switch value={isSwitchOn} onValueChange={onToggleSwitch}  style={{alignItems:"left", justifyContent:"left"}}/>
  </Text>
  <Text>Brew Notifications
  

 <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      <ToggleButton />
  </Text>
  <Text>Sales,Discounts and more 
  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
  </Text>
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
  
Settings.navigationOptions = (navData) => {
  return {
    headerTitle: "Notification Settings",
   
  };
};
export default Settings;