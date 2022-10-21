import { HStack, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { SafeAreaView, View } from 'react-native';
import Header from '../comp/Header';

function NotiCard() {
  return (
    <HStack
      bg={'white'}
      m={2}
      p={2}
      borderRadius={10}
      shadow={5}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <VStack>
        <Text variant={'title'} fontSize={'sm'} color={'blue.600'}>
          New Prescription Recived
        </Text>
        <Text variant={'mainTitle'}>Dr Janaka Perera</Text>
      </VStack>
      <Feather name="chevron-right" size={25} />
    </HStack>
  );
}

export default function Notification() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={'Notification'} />
      <ScrollView bg={'blue.100'}>
        <VStack>
          <NotiCard />
          <NotiCard />
          <NotiCard />
          <NotiCard />
          <NotiCard />
          <NotiCard />
          <NotiCard />
          <NotiCard />
          <NotiCard />
          <NotiCard />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
