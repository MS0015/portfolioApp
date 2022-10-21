import { Text, Center, Image } from 'native-base';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { StyleSheet } from 'react-native';
import GButton from '../../comp/GButton';

function OTPVerification() {
  const navigation = useNavigation();

  const CELL_COUNT = 6;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <>
      <Image
        style={{ position: 'absolute', top: 0, zIndex: 1 }}
        source={require('../../asset/img/upWaves.png')}
      />
      <Image
        style={{ position: 'absolute', top: '60%', right: 0, zIndex: 1 }}
        source={require('../../asset/img/circle.png')}
      />
      <Center justifyContent="center" flex={1}>
        <Text variant="mainTitle">Forgot password</Text>
        <Text variant="desc">We will send you verification code to your email</Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <GButton label="Continue" w="75%" onPress={() => navigation.navigate('ResetPassword')} />
      </Center>
    </>
  );
}

const styles = StyleSheet.create({
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 50,
    fontSize: 30,
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    borderColor: '#00000030',
    textAlign: 'center',
    color: 'blue',
    fontFamily: 'Mulish',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default OTPVerification;
