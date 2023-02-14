import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Starter from '../screens/Starter/Starter';


const Stack = createNativeStackNavigator();

const AppContainer = () => {

  return (
    <Stack.Navigator>
    <Stack.Screen name="Starter" component={Starter} />
  </Stack.Navigator>
  );
};

export default AppContainer;
