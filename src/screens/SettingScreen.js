import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from 'react-native-paper';

const Settings = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={{  justifyContent: "center" }}>
  <Text>Recommended 

    
  </Text>
  <Text>Social Notifications 

  <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
  </Text>
  <Text>Brew Notifications
  <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
  </Text>
  <Text>Sales,Discounts and more 
  <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
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