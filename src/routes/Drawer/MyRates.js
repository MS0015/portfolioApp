import { Box, ScrollView, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../comp/Header';

export default function MyRates() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Change Hourly Rate" />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}
