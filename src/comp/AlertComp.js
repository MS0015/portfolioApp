import { Alert, CloseIcon, HStack, IconButton, Text, VStack } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../reducer/appStateSlice';
import { ALERT_TIMEOUT } from '../util/constant';

export default function AlertComp() {
  const dispatch = useDispatch();

  const alert = useSelector((state) => state.appState.alert);

  if (alert.isVisible) {
    setTimeout(() => {
      dispatch(
        setAlert({
          title: '',
          desc: '',
          type: 'error',
          isVisible: false,
        })
      );
    }, ALERT_TIMEOUT);
  }
  return alert.isVisible ? (
    <Alert
      w="100%"
      status={alert.type}
      position="absolute"
      zIndex={400}
      bottom={0}
      variant="top-accent"
    >
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon mt="1" />
            <VStack>
              <Text fontSize="md" color="coolGray.800">
                {alert.title}
              </Text>
              <Text fontSize="sm" color="coolGray.800">
                {alert.desc}
              </Text>
            </VStack>
          </HStack>
          <IconButton
            onPress={() =>
              dispatch(
                setAlert({
                  title: '',
                  desc: '',
                  isVisible: false,
                })
              )
            }
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            icon={<CloseIcon size="3" />}
            _icon={{
              color: 'coolGray.600',
            }}
          />
        </HStack>
      </VStack>
    </Alert>
  ) : (
    <></>
  );
}
