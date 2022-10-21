import { HStack, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

export default function DrawerItem({ label, onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack justifyContent="space-between">
        <HStack marginBottom={6} alignItems="center" space={3}>
          <AntDesign name="heart" size={30} color="white" />

          <Text variant="title" color="white">
            {label}
          </Text>
        </HStack>
        <AntDesign name="right" size={20} color="white" />
      </HStack>
    </TouchableOpacity>
  );
}

DrawerItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};
DrawerItem.defaultProps = {
  label: '',
  icon: '',
  onPress: () => {},
};
