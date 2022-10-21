import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppointmentsCard from '../../comp/AppointmentsCard';

export default function PastTab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation" />
        <AppointmentsCard label="Fever consultation " />
      </ScrollView>
    </SafeAreaView>
  );
}
