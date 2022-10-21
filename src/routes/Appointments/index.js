import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, HStack, Text, View } from 'native-base';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import PastTab from './PastTab';
import UpcommingTab from './UpcommingTab';

const TopTab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <LinearGradient
      style={{
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#0452E5', '#01B7EB']}
    >
      <HStack alignItems="center" mb={3} mt={3} space={2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box bg="white" borderRadius={6} p={1}>
            <Feather name="chevron-left" size={20} />
          </Box>
        </TouchableOpacity>
        <Text variant="mainTitle" color="white">
          Appointments
        </Text>
      </HStack>
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <View
                style={{
                  backgroundColor: isFocused
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(255, 255, 255, 0)',
                }}
                m={1}
                p={2}
                alignItems="center"
                borderRadius={5}
              >
                <Text opacity={1} color="white" variant="mainTitle">
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
}

export default function Appointments() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <TopTab.Screen name="Upcomming" component={UpcommingTab} />
        <TopTab.Screen name="Past" component={PastTab} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}
