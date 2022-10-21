import { HStack, Text, VStack } from 'native-base';
import React from 'react';

import { SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../comp/Header';
import GButton from '../../comp/GButton';

// in this view doctor can request to change appointment time
// and suggest next appointment time to patient when appointment completed

export default function ChooseDateAndTime() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Choose Date & Time" />

      <VStack p={4} flex={1} justifyContent="space-between">
        <VStack>
          <Text variant="bold">Choose Date</Text>
          <Slot />
          <VStack my={3}>
            <Text variant="bold" mb={2}>
              Choose 3 Time Slot
            </Text>

            <Text variant="bold">Afternoon 7 slots (15 min slots)</Text>

            <HStack space={2} justifyContent="space-between">
              <Slot />
              <Slot />
              <Slot />
            </HStack>
            <HStack space={2} justifyContent="space-between">
              <Slot />
              <Slot />
              <Slot />
            </HStack>
          </VStack>
          <VStack my={3}>
            <Text variant="bold">Afternoon 7 slots (15 min slots)</Text>
            <HStack space={2} justifyContent="space-between">
              <Slot />
              <Slot />
              <Slot />
            </HStack>
            <HStack space={2} justifyContent="space-between">
              <Slot />
              <Slot />
              <Slot />
            </HStack>
          </VStack>
        </VStack>
        <GButton style={{ alignSelf: 'center' }} label="Done" />
      </VStack>
    </SafeAreaView>
  );
}

function Slot() {
  return (
    <TouchableOpacity style={{ width: '30%' }}>
      <LinearGradient
        style={{
          borderRadius: 5,
          width: '100%',
          padding: 7,
          marginVertical: 2,
          alignItems: 'center',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#0452E5', '#01B7EB']}
      >
        <Text variant="title" color="white" fontSize="md">
          2:00 PM
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
