import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'native-base';
import { useSelector } from 'react-redux';
import Login from './Auth/Login';
import OnBoard from './Auth/OnBoard';
import ForgotPassword from './Auth/ForgotPassword';
import OTPVerification from './Auth/OTPVerification';
import ResetPassword from './Auth/ResetPassword';
import Signup from './Auth/Signup';
import Feature from './Feature';
import Notification from './Notification';
import Profile from './Profile';
import Details from './Appointments/Details';
import Appointments from './Appointments';
import Patients from './Patients';
import Drawer from './Drawer';
import MonthlyEarnings from './Drawer/MonthlyEarnings';
import PatientDetails from './Patients/PatientDetails';
import Reviews from './Patients/Reviews';
import PrivacyControl from './Drawer/PrivacyControl';
import SecurityControl from './Drawer/SecurityControl';
import ChooseDateAndTime from './Appointments/ChooseDateAndTime';
import MyRates from './Drawer/MyRates';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName="Feature">
      <Tab.Screen
        name="Feed"
        component={Feature}
        options={() => ({
          headerShown: false,
          tabBarShowLabel: false,
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
        name="Appointments"
        component={Appointments}
        options={() => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/cal.png')}
              alt="Icon"
              size={size}
              tintColor={color}
              resizeMode="contain"
            />
          ),
          tabBarBadge: 2,
        })}
      />
      <Tab.Screen
        name="Patients"
        component={Patients}
        options={() => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/patientDetails.png')}
              alt="Icon"
              size={size}
              tintColor={color}
              resizeMode="contain"
            />
          ),
          tabBarBadge: 2,
        })}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
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
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
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

            {/* Drawer Routes */}
            <Stack.Screen
              name="Drawer"
              component={Drawer}
              options={{
                headerShown: false,
                headerStyle: { elevation: 0 },
                animation: 'slide_from_right',
              }}
            />
            <Stack.Screen
              name="MonthlyEarnings"
              component={MonthlyEarnings}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="PrivacyControl"
              component={PrivacyControl}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="SecurityControl"
              component={SecurityControl}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="MyRates"
              component={MyRates}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />

            {/* Appoinments routes */}
            <Stack.Screen
              name="AppointmentsDetails"
              component={Details}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />

            <Stack.Screen
              name="ChooseDateAndTime"
              component={ChooseDateAndTime}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />

            {/* Patient routes */}
            <Stack.Screen
              name="PatientDetails"
              component={PatientDetails}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
            <Stack.Screen
              name="Reviews"
              component={Reviews}
              options={{ headerShown: false, headerStyle: { elevation: 0 } }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
