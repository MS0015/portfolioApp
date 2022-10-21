import { CheckIcon, HStack, Input, Modal, Select, Text, VStack } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import GButton from './GButton';

export default function FindMonthlyEarningsFilterModal({ modalVisible, onClose }) {
  if (modalVisible) {
    return (
      <VStack flex={1} bg="white" position="absolute" top={0} right={0} h="100%" w="85%">
        <Text variant="mainTitle" p={5} pb={0}>
          Search by Filter
        </Text>
        <Modal.CloseButton onPress={onClose} />
        <VStack justifyContent="space-between" flex={1} mb={2}>
          <VStack p={5} space={4}>
            <Input placeholder="Location" />
            <Select
              minWidth="200"
              placeholder="Serving area"
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
            <Input placeholder="Delivery distance from the location" />
          </VStack>
          <HStack justifyContent="space-between" alignItems="center">
            <GButton
              innerStyle={{ borderRadius: 0 }}
              textColor="black"
              color={['#E7E7E7', '#E7E7E7']}
              label="Reset"
              w="50%"
            />

            <GButton innerStyle={{ borderRadius: 0 }} label="Done" w="50%" />
          </HStack>
        </VStack>
      </VStack>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}

FindMonthlyEarningsFilterModal.propTypes = {
  modalVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

FindMonthlyEarningsFilterModal.defaultProps = {
  modalVisible: false,
  onClose: () => {},
};
