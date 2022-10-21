import { Avatar, Box, Divider, HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';

import { SafeAreaView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../../comp/Header';
import LinearGradient from 'react-native-linear-gradient';
import PastTab from './PastTab';
import UpcommingTab from './UpcommingTab';

const TopTab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
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
          >
            <View m={1} p={2} alignItems="center" borderRadius={5}>
              <Text color={isFocused ? 'black' : 'gray.400'} variant="mainTitle">
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function PatientDetails({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Patient Details" />
      <Box m={3} bg="white" p={3}>
        <HStack space={4} mb={2}>
          <Avatar />
          <VStack>
            <Text variant="mainTitle">Jannet Walton</Text>
            <Text variant="desc" color="gray.500">
              Patient
            </Text>
          </VStack>
        </HStack>
        <Divider />
        <HStack mt={2} space={3}>
          <VStack alignItems="center" bg="gray.100" borderRadius={3} shadow={2} p={3}>
            <Text variant="bold">10</Text>
            <Text variant="semiBold">Appoinments</Text>
          </VStack>
          <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
            <VStack alignItems="center" bg="gray.100" borderRadius={3} shadow={2} p={3}>
              <Text variant="bold">10</Text>
              <Text variant="semiBold">Reviews</Text>
            </VStack>
          </TouchableOpacity>
        </HStack>
      </Box>
      <TopTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <TopTab.Screen name="Past" component={PastTab} />
        <TopTab.Screen name="Upcomming" component={UpcommingTab} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}
