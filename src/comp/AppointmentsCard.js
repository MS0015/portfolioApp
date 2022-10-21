import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function AppointmentsCard({ label, onPress }) {
  return (
    <VStack p={2}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        bg="orange.400"
        p={2}
        borderTopRadius={10}
      >
        <Text flex={3} variant="title" color="white">
          {label}
        </Text>
        <VStack flex={1}>
          <Text variant="desc">Time</Text>
          <Text variant="title" color="white">
            2.20 pm
          </Text>
        </VStack>
        <VStack flex={1}>
          <Text variant="desc">Date</Text>
          <Text variant="title" color="white">
            Today
          </Text>
        </VStack>
      </HStack>
      <HStack
        shadow={2}
        p={2}
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        borderBottomRadius={10}
      >
        <Avatar />
        <VStack>
          <Text variant="title">Dr.Crick</Text>
          <Text variant="desc">Online</Text>
        </VStack>
        <VStack>
          <Text variant="title">Purpose</Text>
          <Text variant="desc">Report reading</Text>
        </VStack>
        <TouchableOpacity onPress={onPress}>
          <Text variant="title" color="blue.700">
            More Info
          </Text>
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
}
