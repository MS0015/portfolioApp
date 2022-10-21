import {
  Text,
  Center,
  Button,
  Stack,
  Input,
  Icon,
  HStack,
  VStack,
  ScrollView,
  Image,
  FormControl,
} from 'native-base';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GButton from '../../comp/GButton';
import { Controller, useForm } from 'react-hook-form';

function Signup() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };

  return (
    <SafeAreaView>
      <Image
        style={{ position: 'absolute', top: 0, zIndex: 0, width: '100%' }}
        source={require('../../asset/img/upWaves.png')}
      />

      <ScrollView>
        <Center mt={5} mb={2}>
          <Text variant="bold" fontSize="2xl">
            Join us start searching
          </Text>
          <Text variant="regular">Signup to our platform and explore our service</Text>

          <HStack mb="2.5" mt="3" space={3}>
            <Button
              width="36%"
              leftIcon={<Icon as={<AntDesign name="google" />} size={5} ml="2" />}
              colorScheme="red"
            >
              Google
            </Button>
            <Button
              width="36%"
              leftIcon={<Icon as={<AntDesign name="facebook-square" />} size={5} ml="2" />}
              colorScheme="blue"
            >
              Facebook
            </Button>
          </HStack>

          <Text variant="desc" mb={2}>
            OR
          </Text>
          <Stack space={4}>
            <FormControl isRequired isInvalid={errors?.firstName}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    w={{
                      base: '90%',
                    }}
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                    placeholder="Name"
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name="firstName"
                rules={{ required: 'Field is required', minLength: 3 }}
                defaultValue=""
              />
              <FormControl.ErrorMessage>{errors?.firstName?.message}</FormControl.ErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={errors?.firstName}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    w={{
                      base: '90%',
                    }}
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                    placeholder="Name"
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name="firstName"
                rules={{ required: 'Field is required', minLength: 3 }}
                defaultValue=""
              />
              <FormControl.ErrorMessage>{errors?.firstName?.message}</FormControl.ErrorMessage>
            </FormControl>

            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Name"
            />
            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Date of birth"
            />
            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Gender"
            />
            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="E-mail"
            />
            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Phone no"
            />
            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Address"
            />
            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="District"
            />
            <Input
              w={{
                base: '90%',
              }}
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Are you?"
            />
            <Input
              w={{
                base: '90%',
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
          </Stack>

          <GButton label="Sign up" w="75%" onPress={handleSubmit(onSubmit)} />

          <VStack alignItems="center" mt={3}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text variant="desc" color="blue.700">
                Have an account? Login
              </Text>
            </TouchableOpacity>
          </VStack>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;
