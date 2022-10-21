import { HStack, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import { vs, ms, s } from 'react-native-size-matters';

export default function DoctorCard({
  name,
  onPress,
  experienceYears,
  isFavourite,
  onClickFavourite,
}) {
  return (
    <VStack mx={2} p={4} bg="white" borderRadius={10} shadow={2}>
      <HStack space={3}>
        <VStack>
          <ImageBackground
            style={{
              width: s(80),
              height: s(80),
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
            imageStyle={{ borderRadius: 10 }}
            source={require('../asset/img/dr.jpg')}
            resizeMode="cover"
          >
            <HStack alignItems="center" space={1} bg="gray.100">
              <MaterialIcons name="star" color="orange" size={s(12)} />
              <Text variant="bold" fontSize={vs(11)}>
                3.7
              </Text>
            </HStack>
          </ImageBackground>
        </VStack>
        <VStack flex={1}>
          <HStack justifyContent="space-between">
            <Text variant="bold">Dr. {name}</Text>
            <TouchableOpacity onPress={onClickFavourite}>
              <AntDesign name="heart" color={isFavourite ? 'red' : 'gray'} size={s(20)} />
            </TouchableOpacity>
          </HStack>
          <Text variant="regular" color="blue.600" fontSize="sm">
            Specilist medicine
          </Text>
          {experienceYears != 0 && (
            <Text variant="light" fontSize="md" color="gray.600">
              {experienceYears} Years experience
            </Text>
          )}
          <Text variant="light" fontSize={ms(12)} color="gray.600">
            <Octicons name="dot-fill" color="blue" size={vs(12)} /> 69 Patient
          </Text>
        </VStack>
      </HStack>

      <HStack justifyContent="space-between" pt={2}>
        <VStack>
          <Text variant="bold" color="blue.600" fontSize={ms(13)}>
            Next Available
          </Text>
          <Text variant="semiBold" fontSize={ms(13)} color="gray.600">
            10:00 AM tomorrow
          </Text>
        </VStack>
        <LinearGradient
          style={{ borderRadius: 5, width: '40%', padding: 5, marginTop: 15 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#0452E5', '#01B7EB']}
        >
          <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={onPress}>
            <Text variant="bold" color="white" fontSize={ms(11)}>
              Add Appoinment
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </HStack>
    </VStack>
  );
}
