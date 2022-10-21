import { HStack, Text, VStack } from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { ImageBackground, TouchableOpacity } from 'react-native';

export default function OrderCard({ onPress, noShadow = false }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack p={3} bg="white" mx={3} borderRadius={5} shadow={!noShadow ? 2 : -1} space={2}>
        <ImageBackground
          style={{ width: 60, height: 60, alignItems: 'flex-end', justifyContent: 'flex-end' }}
          imageStyle={{ borderRadius: 10 }}
          source={require('../asset/img/dr.jpg')}
          resizeMode="cover"
        >
          <HStack alignItems="center" space={1} bg="gray.100">
            <MaterialIcons name="star" color="orange" size={15} />
            <Text variant="mainTitle" fontSize="sm">
              3.7
            </Text>
          </HStack>
        </ImageBackground>
        <VStack mt={-1}>
          <Text mb={-1} variant="mainTitle">
            Fever Consultation
          </Text>
          <Text variant="desc">Medi care Pharmacy</Text>
          <Text variant="desc" color="blue.600" fontSize="sm">
            Order Proccessing
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
