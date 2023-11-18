import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from '../components/InputScreen';
import Conversas from '../components/Conversas';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatScreen">
        <Stack.Screen name="WhatsApp" component={Conversas}options={{headerStyle: {backgroundColor: '#075C55'},headerShown: false,}} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
