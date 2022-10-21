import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../comp/Header';
import ReviewCard from '../../comp/ReviewCard';

export default function Reviews() {
  return (
    <SafeAreaView>
      <Header title="Reviews" />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </SafeAreaView>
  );
}
