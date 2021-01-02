/*
Authors:
Emil Alleshauge Dalskov (emda@itu.dk)
Irene Bøjle Kjær-Hansen (irkj@itu.dk)
Kristine Gøtje Jørgensen (krgj@itu.dk)
Line Stengaard Henriksen (lhen@itu.dk)
Lars Peter Jerichau Clausen (lacl@itu.dk)
*/

import * as React from 'react';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//importing local components
import CameraScreen from './components/CameraScreen';
import HomeScreen from './components/HomeScreen';
import ImagePickerExample from './components/ImagePicker';
import ProfilePageScreen from './components/ProfilePageScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import NewPassword from './components/NewPassword';
import WeatherScreen from './components/WeatherScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen
          name="LogIn"
          component={LoginScreen}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-log-in'}
            ></Icon>
          }}
        />

        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-home'}
            ></Icon>
          }}
        />

        <Drawer.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-log-in'}
            ></Icon>
          }}
        />

        <Drawer.Screen
          name="ProfilePage"
          component={ProfilePageScreen}
          options={{
            headerShown: true,
            title: "Profile page",
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-happy'}
            ></Icon>
          }}
        />

        <Drawer.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-cloud'}
            ></Icon>
          }}
        />
        <Drawer.Screen
          name="Forgot Password"
          component={NewPassword}
          options={{
            drawerLabel: () => null,
          }}
        />

        <Drawer.Screen
          name="Camera"
          component={ImagePickerExample}
          options={{
            drawerLabel: () => null,
          }}
        />

        <Drawer.Screen
          name="Camera2"
          component={CameraScreen}
          options={{
            drawerLabel: () => null,
          }}
        />


      </Drawer.Navigator>


    </NavigationContainer>
  );
}
