import { Alert, Center, Spinner, Text, VStack } from 'native-base';
import React from 'react';

export default function LoadingComp() {
  return (
    <VStack
      zIndex={1}
      top={0}
      bottom={0}
      right={0}
      left={0}
      position="absolute"
      justifyContent="center"
      alignItems="center"
      bg="rgba(52, 52, 52, 0.5)"
    >
      <Center>
        <Alert status="info">
          <VStack space={1} flexShrink={1} w="100%" alignItems="center">
            <Spinner size="lg" />
            <Text
              fontSize="md"
              fontWeight="medium"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Loading
            </Text>
          </VStack>
        </Alert>
      </Center>
    </VStack>
  );
}
