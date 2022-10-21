import { Button, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { SafeAreaView, View } from 'react-native';
import Header from '../../comp/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GButton from '../../comp/GButton';

export default function PrescriptionReceived() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={'Prescription Received'} />

      <VStack
        space={4}
        bg={'white'}
        mt={5}
        p={3}
        borderTopRadius={20}
        flex={1}
        alignItems={'center'}
      >
        <HStack space={2}>
          <FontAwesome name="edit" size={50} color="blue" />
          <VStack>
            <Text variant={'mainTitle'}>There is your Prescription</Text>
            <Text variant={'desc'}>This Prescription valid in one month</Text>
          </VStack>
        </HStack>

        <VStack bg={'amber.100'} h={400} w={300} />
        <GButton label={'View Nearby Pharmacies'} />
        <Button width={'50%'} variant={'ghost'}>
          Not Now
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
