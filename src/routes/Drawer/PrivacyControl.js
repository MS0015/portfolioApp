import { Box, ScrollView, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../comp/Header';

export default function PrivacyControl() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Privacy Control" />
      <ScrollView>
        <Text p={4}>
          Privacy controls are lists of measures that will reduce privacy risk contained in an
          information system. They respond to risks identified in a risk analysis process. They
          correspond to the imact levels identified in a privacy impact analysis (PIA) . The risk
          manager chooses matching controls that fulfill a number of requirements. A privacy control
          is chosen from one of two categories: a technical control; an administrative control.
          Technical controls are controls that are part of the information technology used to
          process personal data. technical controls are often functions of information security such
          as access control, encryption, integrity protection, availability insurance. Safety
          functions such as fire protection, redundant power supplies and reserve hardware are part
          of the technical controls, too. Finally, PETs and other privacy support technology such as
          data hiding, steganography, mathematical data obfuscation and TETs are technical controls.
          Technical controls are implemented into the technical infrastructure at project
          development and on the occasion major changes of the technological base. Adminstrative
          controls are all non-technical controls. Administrative controls are, for example, staff
          qualifiaction management, staff security clearance, the propoer administration of data
          subject consent and privacy policies in harmony with the data transactions performed. The
          administration of physical access to computing hardware and storage devices, the
          management of roles and privileges that lead to authorization in access control systems,
          and the authorization and monitoring of subcontractors are other examples of
          administrative controls. Sometimes, physical controls are listet separately, implying the
          securing of physical access to systems. Non-technical controls get implemented in
          processes, procedures, policies and operations.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
