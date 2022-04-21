import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Dashboard from './Dashboard';
import Elearning from './Elearning';
import Support from './Support';
import Events from './Events';
import Splash from './Splash';


const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
     
          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Elearning"
          component={Elearning}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{headerShown: false}}
        />
            
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;