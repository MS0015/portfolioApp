import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function PatientCard({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        borderRadius={10}
        borderWidth={1}
        borderColor="gray.300"
        shadow={2}
        p={2}
        bg="white"
        mt={3}
      >
        <HStack space={4}>
          <Avatar />
          <VStack>
            <Text variant="mainTitle">Jannet Walton</Text>
            <Text variant="desc" color="gray.500">
              Patient
            </Text>
          </VStack>
        </HStack>
        <VStack>
          <Text variant="bold" color="#0466E6">
            25
          </Text>
          <Text color="#0466E6">Appointments</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
