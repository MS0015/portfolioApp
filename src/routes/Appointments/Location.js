import { VStack } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import GButton from '../../comp/GButton';
import Header from '../../comp/Header';

export default function Location() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Location" />
      <VStack flex={1} bg={'gray.300'} justifyContent={'flex-end'} alignItems={'center'} p={2}>
        <GButton label={'Im in Lodation'} />
      </VStack>
    </SafeAreaView>
  );
}
