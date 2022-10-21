import React from 'react';
import { Avatar, HStack, VStack, View, Text, Input, Icon, Skeleton } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { ms, vs, s, mvs } from 'react-native-size-matters';

import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function UserMainHeader({ userName, isFetching = false }) {
  const navigation = useNavigation();

  return (
    <View mb={vs(10)}>
      <LinearGradient
        style={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#0452E5', '#01B7EB']}
      >
        <View m={vs(20)} mb={vs(25)}>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space={3}>
              <Avatar size={ms(55)} source={require('../asset/img/dr.jpg')} />
              <VStack>
                {!isFetching && userName !== '' && (
                  <Text variant="light" fontSize={ms(17)} color="white">
                    Hi Dr. {userName}
                  </Text>
                )}
                {(isFetching || userName === '') && <Skeleton.Text px="1" lines={1} />}
                <Text variant="bold" fontSize={ms(20)} color="white">
                  Happy Consulting
                </Text>
              </VStack>
            </HStack>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
              <FontAwesome name="align-right" size={ms(25)} color="white" />
            </TouchableOpacity>
          </HStack>
        </View>
      </LinearGradient>
      <View alignItems="center" w="100%" mt={vs(-15)}>
        <Input
          fontFamily="Mulish"
          fontWeight={200}
          fontSize={ms(12)}
          color="#677294"
          placeholderTextColor="#677294"
          InputLeftElement={
            <Icon as={<Feather name="search" />} size={ms(17)} ml="2" color="#677294" />
          }
          InputRightElement={
            <Icon as={<Feather name="x" />} size={ms(12)} mr="2" color="#677294" />
          }
          placeholder="Search....."
          w="90%"
          bgColor="white"
        />
      </View>
    </View>
  );
}
