import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
import Home_tab from './Home_tab'
import Search_movie from './Search_movie'
import Category from './Category'
import Offline from './Offline'
import Modal from "react-native-modal";
import More from "./More";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'white',
         style: {
      backgroundColor: '#121212',borderTopColor: "transparent",
      fontSize:16,elevation: 5
    }
      }}
    >
      <Tab.Screen
        name="home"
        component={Home_tab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search_movie}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-search" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Offline"
        component={Offline}
        options={{
          tabBarLabel: 'Offline',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="download" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  barStyle="dark-content"
      /> 
      <MyTabs />
    </NavigationContainer>
  );
}
