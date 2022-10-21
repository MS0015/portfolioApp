import { Box, HStack, Icon, Input, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { ms } from 'react-native-size-matters';

export default function Header({ title, searchable, onPress, onPressFilter }) {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={{
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#0452E5', '#01B7EB']}
    >
      <HStack alignItems="center" mb={3} mt={3} space={2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box bg="white" borderRadius={6} p={1}>
            <Feather name="chevron-left" size={20} />
          </Box>
        </TouchableOpacity>
        <Text variant="bold" color="white" fontSize={ms(18)}>
          {title}
        </Text>
      </HStack>
      {searchable && (
        <HStack alignSelf="center" alignItems="center" space={2}>
          <Input
            fontFamily="Mulish"
            fontSize="md"
            InputLeftElement={
              <Icon as={<Feather name="search" />} size={5} ml="2" color="muted.400" />
            }
            InputRightElement={<Icon as={<Feather name="x" />} size={4} mr="2" color="muted.400" />}
            placeholder="Search....."
            w="85%"
            variant="filled"
            bgColor="white"
          />
          <TouchableOpacity onPress={onPressFilter}>
            <Box bg="white" borderRadius={6} p={1}>
              <Feather name="filter" size={25} />
            </Box>
          </TouchableOpacity>
        </HStack>
      )}
    </LinearGradient>
  );
}
Header.propTypes = {
  title: PropTypes.string,
  searchable: PropTypes.bool,
  onPress: PropTypes.func,
  onPressFilter: PropTypes.func,
};
Header.defaultProps = {
  title: '',
  searchable: false,
  onPress: () => {},
  onPressFilter: () => {},
};
