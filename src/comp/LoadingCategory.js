import { Skeleton } from 'native-base';
import React from 'react';

export default function LoadingCategory() {
  return (
    <Skeleton
      borderWidth={1}
      borderColor="coolGray.200"
      endColor="warmGray.50"
      size="16"
      rounded="full"
    />
  );
}
