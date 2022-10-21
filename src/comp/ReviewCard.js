import { Text, VStack } from 'native-base';
import React from 'react';

export default function ReviewCard() {
  return (
    <VStack p={3} m={3} mt={2} bg={'white'} borderRadius={10}>
      <Text variant={'mainTitle'}>Anil Perara</Text>
      <Text variant={'desc'}>
        Achieve effortless elegance with Review Australia's collection of women's tops. Look to
        chiffon blouses that will take you{' '}
      </Text>
    </VStack>
  );
}
