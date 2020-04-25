import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react'; 

import TabBarIcon from '../components/TabBarIcon';
import Contacts from '../screens/ContactScreen';
import Profile from '../screens/ProfileScreen'; 
//Add screens here

const BottomTab = createBottomTabNavigator(); 
const INITITAL_ROUTE_NAME = 'contacts'; 

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) }); 

  return (
    <BottomTab.Navigator initialRouteName={ INITITAL_ROUTE_NAME }>
      <BottomTab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'Contact Page',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile Page',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITITAL_ROUTE_NAME;
  
  switch(routeName) {
    case "Contacts":
      return "view contacts"
    case "Profile":
      return "view profile"
  }
}