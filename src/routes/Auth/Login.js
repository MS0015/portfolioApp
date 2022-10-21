import {
  Text,
  Center,
  Button,
  Stack,
  Input,
  Icon,
  HStack,
  VStack,
  Image,
  FormControl,
} from 'native-base';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import GButton from '../../comp/GButton';
import { useLoginMutation } from '../../reducer/api/userApi';
import LoadingComp from '../../comp/LoadingComp';
import { setAlert } from '../../reducer/appStateSlice';

function Login() {
  const navigation = useNavigation();
  const [login, loginState] = useLoginMutation();
  // Password visiblity state
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'mathu0016@gmail.com',
      password: 'mathu',
    },
  });

  const onSubmit = (data) => {
    login(data)
      .unwrap()
      .then(() => {
        dispatch(
          setAlert({
            title: 'Success',
            desc: 'Login sccessfully completed!',
            type: 'success',
            isVisible: true,
          })
        );
      })
      .catch((err) => {
        dispatch(
          setAlert({
            title: err.data.error,
            desc: err.data.message,
            type: 'error',
            isVisible: true,
          })
        );
      });
  };

  return (
    <>
      <Image
        alt="Upwave"
        style={{ position: 'absolute', top: 0, zIndex: 1, width: '100%' }}
        source={require('../../asset/img/upWaves.png')}
      />
      <Image
        alt="Bottomwave"
        style={{ position: 'absolute', bottom: 0, zIndex: 1, width: '100%' }}
        source={require('../../asset/img/downWaves.png')}
      />
      <Center justifyContent="center" flex={1}>
        <Text variant="semiBold" fontSize="2xl">
          Welcome back!
        </Text>
        <Text variant="desc">Sign in to continue!</Text>

        <HStack mb="2.5" mt="1.5" space={3}>
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
        <Stack space={4} w="100%" alignItems="center" mb={3} px={10}>
          <FormControl isRequired isInvalid={errors?.email}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={(val) => onChange(val)}
                  value={value}
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
                  }
                  placeholder="E-mail"
                />
              )}
              name="email"
              rules={{ required: 'Field is required', minLength: 3 }}
            />
            <FormControl.ErrorMessage>{errors?.email?.message}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={errors?.password}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={(val) => onChange(val)}
                  value={value}
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
              )}
              name="password"
              rules={{ required: 'Field is required', minLength: 3 }}
            />
            <FormControl.ErrorMessage>{errors?.password?.message}</FormControl.ErrorMessage>
          </FormControl>
        </Stack>

        <GButton label="Login" w="75%" onPress={handleSubmit(onSubmit)} />

        <VStack alignItems="center" mt={3}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text variant="desc" color="blue.700">
              Forgot password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text variant="desc" color="blue.700">
              Don&apos;t have account? Join with us.
            </Text>
          </TouchableOpacity>
        </VStack>
        {loginState.isLoading && <LoadingComp />}
      </Center>
    </>
  );
}

export default Login;
