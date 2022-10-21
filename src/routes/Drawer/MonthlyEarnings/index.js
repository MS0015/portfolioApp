import { ScrollView } from 'native-base';
import React from 'react';

import { SafeAreaView } from 'react-native';
import FindMonthlyEarningsFilterModal from '../../../comp/FindMonthlyEarningsFilterModal';
import Header from '../../../comp/Header';
import MonthlyEarningCard from '../../../comp/MonthlyEarningCard';

export default function MonthlyEarnings({ navigation }) {
  const [showPharmacyFilterModal, setShowPharmacyFilterModal] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        searchable
        title="Monthly Earnings"
        onPressFilter={() => setShowPharmacyFilterModal(true)}
      />
      <ScrollView mt={2}>
        <MonthlyEarningCard />
        <MonthlyEarningCard />
        <MonthlyEarningCard />
        <MonthlyEarningCard />
        <MonthlyEarningCard />
      </ScrollView>
      <FindMonthlyEarningsFilterModal
        modalVisible={showPharmacyFilterModal}
        onClose={() => setShowPharmacyFilterModal(false)}
      />
    </SafeAreaView>
  );
}
