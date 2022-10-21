import { Text, Center, Stack, Input, Icon, Image } from 'native-base';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import GButton from '../../comp/GButton';

function ResetPassword() {
  const navigation = useNavigation();

  const [show, setShow] = useState(false);
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
        <Text variant="mainTitle">Reset Password</Text>
        <Text variant="desc" textAlign="center">
          Set the new password for your account so you can login and access all the features.{' '}
        </Text>

        <Stack space={4} w="100%" alignItems="center" mb={3}>
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            type={show ? 'text' : 'password'}
            InputLeftElement={
              <Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />
            }
            InputRightElement={
              <Icon
                as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                size={5}
                mr="2"
                color="muted.400"
                onPress={() => setShow(!show)}
              />
            }
            placeholder="Password"
          />
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            type={show ? 'text' : 'password'}
            InputLeftElement={
              <Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />
            }
            InputRightElement={
              <Icon
                as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                size={5}
                mr="2"
                color="muted.400"
                onPress={() => setShow(!show)}
              />
            }
            placeholder="Re-enter password"
          />
        </Stack>

        <GButton label="Continue" w="75%" onPress={() => navigation.navigate('Home')} />
      </Center>
    </>
  );
}

export default ResetPassword;
