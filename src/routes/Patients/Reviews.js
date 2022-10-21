import { ScrollView, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import GButton from '../../comp/GButton';
import Header from '../../comp/Header';
import ReviewCard from '../../comp/ReviewCard';

export default function Reviews() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Reviews" />
      <ScrollView>
        <Text variant={'bold'} m={2}>
          Patient Review
        </Text>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

        <Text variant={'bold'} m={2}>
          My Review
        </Text>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <GButton label={'Write a review'} w="50%" style={{ marginLeft: 10 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
