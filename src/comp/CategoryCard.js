import React from 'react';
import { Avatar, Text, VStack } from 'native-base';
import PropTypes from 'prop-types';
import { ms, s, vs } from 'react-native-size-matters';

export default function CategoryCard({ imgUrl, label }) {
  return (
    <VStack alignItems="center">
      <Avatar
        shadow={2}
        mx={ms(5)}
        size={s(60)}
        bg="white"
        p={ms(10)}
        source={{
          uri: imgUrl,
        }}
      >
        {label}
      </Avatar>

      <Text variant="regular">{label}</Text>
    </VStack>
  );
}
CategoryCard.propTypes = {
  label: PropTypes.string,
  imgUrl: PropTypes.node,
};
CategoryCard.defaultProps = {
  label: '',
  imgUrl: '',
};
