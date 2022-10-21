import { CheckIcon, HStack, Input, Modal, Select, Text, VStack } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import GButton from './GButton';

export default function FindDoctorFilterModal({ modalVisible, onClose }) {
  const windowHeight = Dimensions.get('window').height;
  return (
    <Modal
      isOpen={modalVisible}
      size="full"
      onClose={onClose}
      justifyContent="space-between"
      pl={10}
      safeAreaTop
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body height={windowHeight - 150} p={0}>
          <Text variant="mainTitle" p={5} pb={0}>
            Search by Filter
          </Text>
          <VStack flex={1} p={5} space={4}>
            <Select
              minWidth="200"
              placeholder="Gender"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <Input placeholder="Service Experience" />
            <Select
              minWidth="200"
              placeholder="Service Categories"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <Select
              minWidth="200"
              placeholder="Serving Area"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </VStack>
          <HStack justifyContent="space-between" alignItems="center">
            <GButton textColor="black" color={['#E7E7E7', '#E7E7E7']} label="Reset" w="50%" />

            <GButton label="Done" w="50%" />
          </HStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
