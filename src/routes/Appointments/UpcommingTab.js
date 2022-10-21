import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppointmentsCard from '../../comp/AppointmentsCard';

export default function UpcommingTab() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <AppointmentsCard
          label="Fever consultation"
          onPress={() => navigation.navigate('AppointmentsDetails')}
        />
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
