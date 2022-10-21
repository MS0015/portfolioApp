import { Button, Divider, HStack, ScrollView, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../comp/Header';

export default function Details({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Appoinments Details" />
      <ScrollView>
        <VStack bg="white" m={3} p={2} space={2}>
          <HStack space={2}>
            <ImageBackground
              style={{ width: 80, height: 80, alignItems: 'flex-end', justifyContent: 'flex-end' }}
              imageStyle={{ borderRadius: 10 }}
              source={require('../../asset/img/dr.jpg')}
              resizeMode="cover"
            >
              <HStack alignItems="center" space={1} bg="gray.100">
                <MaterialIcons name="star" color="orange" size={15} />
                <Text variant="mainTitle" fontSize="sm">
                  3.7
                </Text>
              </HStack>
            </ImageBackground>
            <VStack>
              <Text variant="mainTitle" mb={-2} mt={-1} color="red.600">
                Canceled
              </Text>
              <Text variant="mainTitle" mb={-1}>
                Fever consultaion
              </Text>
              <Text variant="title" mb={-1}>
                Dr TRampre
              </Text>
              <Text variant="desc" color="blue.400">
                Specialist medicine
              </Text>
            </VStack>
          </HStack>
          <VStack>
            <Text variant="mainTitle" color="blue.600">
              Today at 2:00 PM
            </Text>
            <Text variant="desc">Onilne | Report reading</Text>
          </VStack>
          <Divider />

          <Text variant="mainTitle">Patient Details</Text>

          <VStack>
            <Text variant="desc" color="gray.500">
              Name
            </Text>
            <Text variant="mainTitle">P.Mathusuthan</Text>
          </VStack>
          <VStack>
            <Text variant="desc" color="gray.500">
              Medical details
            </Text>
            <Text variant="mainTitle">Type</Text>
          </VStack>
          <VStack>
            <Text variant="desc" color="gray.500">
              Medical details
            </Text>
            <Text variant="mainTitle">Type 1</Text>
          </VStack>
          <VStack>
            <Text variant="desc" color="gray.500">
              Attachment
            </Text>
            <Text variant="mainTitle">Type 1</Text>
          </VStack>
          <VStack>
            <Text variant="title">Login URL</Text>
            <Text variant="mainTitle">Type 1</Text>
          </VStack>
          <Button size="sm" w="30%" colorScheme="blue">
            Send mail
          </Button>

          <Button
            variant="outline"
            colorScheme="blue"
            onPress={() => {
              navigation.navigate('ChooseDateAndTime');
            }}
          >
            Request a Change Appoinment
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
