import React from 'react';
import { HStack, ScrollView, Text, VStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ms, vs } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import UserMainHeader from '../comp/UserMainHeader';
import NotificationCard from '../comp/NotificationCard';
import { useGetUserQuery } from '../reducer/api/userApi';
import EarningsMainCard from '../comp/EarningsMainCard';
import ReviewMainCard from '../comp/ReviewMainCard';
import AppointmentsCard from '../comp/AppointmentsCard';

export default function Feature({ navigation }) {
  const { isFetching: userIsFetching } = useGetUserQuery();

  const name = useSelector((state) => state.userState?.userDetails?.name);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserMainHeader userName={name} isFetching={userIsFetching} />
      <ScrollView bg="gray.100">
        <VStack m={2} mt={0} space={2}>
          <NotificationCard
            type="prescriptionReceived"
            onPress={() => navigation.navigate('PrescriptionReceived')}
          />
          <NotificationCard
            type="ratePharmacy"
            onPress={() => navigation.navigate('RatePharmacy')}
          />
        </VStack>

        <VStack m={2} space={3}>
          <Text variant="bold" fontSize={ms(18)}>
            Your Earnings
          </Text>
          <EarningsMainCard />
          <ReviewMainCard />
        </VStack>

        <VStack m={2} space={3}>
          <Text variant="bold" fontSize={ms(18)}>
            Upcoming Appoinments
          </Text>
          <AppointmentsCard onPress={() => navigation.navigate('AppointmentsDetails')} />
          <AppointmentsCard />
          <AppointmentsCard />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
