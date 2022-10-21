import { HStack, Text, VStack } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { vs, ms, s } from 'react-native-size-matters';

export default function NotificationCard({ label, onPress, style, color, type }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      <LinearGradient
        style={{
          borderRadius: 5,
          width: '100%',
          padding: s(10),
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 0 }}
        colors={color}
      >
        {type === 'doctorSuggestTime' && (
          <>
            <VStack>
              <Text variant="regular" fontSize={ms(14)} color="white">
                Doctor Suggest Next Appoinment
              </Text>
              <Text variant="extraBold" fontSize={ms(15)} color="white">
                Dr.Janaka Perera
              </Text>
            </VStack>
            <MaterialIcons name="chevron-right" color="white" size={ms(30)} />
          </>
        )}
        {type === 'ratePharmacy' && (
          <>
            <VStack>
              <Text variant="regular" fontSize={ms(14)} color="white">
                Your Order Recieved
              </Text>
              <Text variant="extraBold" fontSize={ms(15)} color="white">
                Rate Pharmacy
              </Text>
            </VStack>
            <MaterialIcons name="chevron-right" color="white" size={ms(30)} />
          </>
        )}
        {type === 'acceptedYourOrder' && (
          <>
            <VStack>
              <Text variant="regular" fontSize={ms(14)} color="white">
                Medicare Pahrmacy
              </Text>
              <Text variant="extraBold" fontSize={ms(15)} color="white">
                Accept your order
              </Text>
            </VStack>
            <MaterialIcons name="chevron-right" color="white" size={ms(30)} />
          </>
        )}
        {type === 'requestForChangeSchedule' && (
          <>
            <VStack>
              <Text variant="regular" fontSize={ms(14)} color="white">
                Request for change Schedule
              </Text>
              <Text variant="extraBold" fontSize={ms(15)} color="white">
                Dr.Janaka Perera
              </Text>
            </VStack>
            <MaterialIcons name="chevron-right" color="white" size={ms(30)} />
          </>
        )}
        {type === 'newReview' && (
          <>
            <VStack>
              <Text variant="regular" fontSize={ms(14)} color="white">
                New Review
              </Text>
              <Text variant="extraBold" fontSize={ms(15)} color="white">
                Dr.Janaka Perera
              </Text>
            </VStack>
            <MaterialIcons name="chevron-right" color="white" size={ms(30)} />
          </>
        )}
        {type === 'prescriptionReceived' && (
          <>
            <VStack>
              <Text variant="regular" fontSize={ms(14)} color="white">
                New Prescription Recieved
              </Text>
              <Text variant="extraBold" fontSize={ms(15)} color="white">
                Dr.Janaka Perera
              </Text>
            </VStack>
            <MaterialIcons name="chevron-right" color="white" size={ms(30)} />
          </>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

NotificationCard.propTypes = {
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
NotificationCard.defaultProps = {
  label: '',
  color: ['#69BD41', '#1772C7'],
  onPress: () => {},
  style: {},
  type: 'doctorSuggestTime',
};
