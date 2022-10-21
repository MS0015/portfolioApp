import { HStack, Text, VStack } from 'native-base';
import React from 'react';

export default function MonthlyEarningCard() {
  return (
    <HStack
      px={3}
      py={2}
      mx={4}
      mt={2}
      bg="white"
      borderRadius={5}
      shadow={2}
      justifyContent="space-between"
    >
      <VStack>
        <Text variant="bold" fontSize="xl">
          August Payment
        </Text>
        <Text>03 Jan 2022</Text>
      </VStack>

      <HStack space={2} alignItems="center">
        <Text variant="bold" fontSize="xl" color={'blue.600'}>
          LKR2500
        </Text>
        <Text color={'green.600'}>Deposited</Text>
      </HStack>
    </HStack>
  );
}
