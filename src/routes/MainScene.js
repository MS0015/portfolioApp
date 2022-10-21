import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'native-base';
import Login from './Auth/Login';
import OnBoard from './Auth/OnBoard';
import ForgotPassword from './Auth/ForgotPassword';
import OTPVerification from './Auth/OTPVerification';
import ResetPassword from './Auth/ResetPassword';
import Signup from './Auth/Signup';
import Ideas from './Ideas';
import Risk from './Risk';
import Income from './Income';
import Data from './Data';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName="Feature">
      <Tab.Screen
        name="Risk"
        component={Risk}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/heart.png')}
              alt="Icon"
              size={size}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        })}
      />
      <Tab.Screen
        name="Ideas"
        component={Ideas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/noti.png')}
              alt="Icon"
              size={size}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Income"
        component={Income}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/noti.png')}
              alt="Icon"
              size={size}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Data"
        component={Data}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/user.png')}
              alt="Icon"
              size={size}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainScene() {
  // const token = useSelector((state) => state.userState.auth.token);
  const token = '*****';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoard">
        {token === null ? (
          <Stack.Group>
            {/* <Stack.Screen name="Splash" component={Splash} /> */}
            {/* Auth */}
            <Stack.Screen
              name="OnBoard"
              component={OnBoard}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="OTPVerification"
              component={OTPVerification}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />

            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
          </Stack.Group>
        ) : (
          // {/* Main tab routes */}
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
