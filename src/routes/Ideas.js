import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../comp/Header';

export default function Ideas() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Notification" />
    </SafeAreaView>
  );
}
