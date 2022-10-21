import { Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GButton({ label, color, onPress, w, style, innerStyle, textColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style, { width: w }]}>
      <LinearGradient
        style={[
          {
            borderRadius: 5,
            width: '100%',
            padding: 13,
            marginVertical: 3,
            alignItems: 'center',
          },
          innerStyle,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={color}
      >
        <Text variant="bold" color={textColor}>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

GButton.propTypes = {
  label: PropTypes.string,
  color: PropTypes.arrayOf(PropTypes.string),
  onPress: PropTypes.func,
  w: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  innerStyle: PropTypes.objectOf(PropTypes.string),
  textColor: PropTypes.string,
};
GButton.defaultProps = {
  label: '',
  color: ['#0452E5', '#01B7EB'],
  onPress: () => {},
  w: '80%',
  style: {},
  innerStyle: {},
  textColor: 'white',
};
