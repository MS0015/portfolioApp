import { Text, Center, Stack, Input, Icon, Image } from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import GButton from '../../comp/GButton';

function ForgotPassword() {
  const navigation = useNavigation();
  return (
    <>
      <Image
        style={{ position: 'absolute', top: 0, zIndex: 1 }}
        source={require('../../asset/img/upWaves.png')}
      />
      <Image
        style={{ position: 'absolute', top: '60%', right: 0, zIndex: 1 }}
        source={require('../../asset/img/circle.png')}
      />
      <Center justifyContent="center" flex={1}>
        <Text variant="mainTitle">Forgot password</Text>
        <Text variant="desc">We will send you verification code to your email</Text>

        <Stack w="100%" alignItems="center" mb={3} mt={3}>
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
            }
            placeholder="E-mail"
          />
        </Stack>

        <GButton label="Continue" w="75%" onPress={() => navigation.navigate('OTPVerification')} />
      </Center>
    </>
  );
}

export default ForgotPassword;
