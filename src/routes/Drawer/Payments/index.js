import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../../../comp/Header';
import PaymentDetailsCard from '../../../comp/PaymentDetailsCard';

export default function Payments({ navigation }) {
  return (
    <SafeAreaView>
      <Header title="Payments" searchable />
      <ScrollView>
        <PaymentDetailsCard onPress={() => navigation.navigate('PaymentDetails')} />
        <PaymentDetailsCard />
        <PaymentDetailsCard />
        <PaymentDetailsCard />
        <PaymentDetailsCard />
        <PaymentDetailsCard />
        <PaymentDetailsCard />
        <PaymentDetailsCard />
      </ScrollView>
    </SafeAreaView>
  );
}
