import { HStack, Text, VStack } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { vs, ms, s } from 'react-native-size-matters';

export default function ReviewMainCard({ label, onPress, style, color, type }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style]} activeOpacity={0.9}>
      <LinearGradient
        style={{
          borderRadius: 5,
          width: '100%',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 0 }}
        colors={color}
      >
        <Image
          resizeMode="stretch"
          source={require('../asset/img/reviewbg.png')}
          style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.9 }}
        />
        <HStack justifyContent={'space-between'} px="7" py="7">
          <VStack>
            <Text variant="bold" fontSize={ms(14)} color="white">
              5 star
            </Text>
            <Text variant="extraBold" fontSize={ms(20)} color="white">
              Reviews
            </Text>
          </VStack>
          <Text variant="extraBold" fontSize={ms(26)} color="white">
            500
          </Text>
        </HStack>
      </LinearGradient>
    </TouchableOpacity>
  );
}

ReviewMainCard.propTypes = {
  label: PropTypes.string,
  color: PropTypes.arrayOf(PropTypes.string),
  onPress: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.oneOf([
    'doctorSuggestTime',
    'ratePharmacy',
    'acceptedYourOrder',
    'requestForChangeSchedule',
    'newReview',
    'prescriptionReceived',
    'yourNextAppoinment',
    'newComment',
  ]),
};
ReviewMainCard.defaultProps = {
  label: '',
  color: ['#38B6C7', '#38B6C7'],
  onPress: () => {},
  style: {},
  type: 'doctorSuggestTime',
};
