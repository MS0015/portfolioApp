import { Button, Modal, Text } from 'native-base';
import React from 'react';
import GButton from './GButton';

export default function SuccessAppointmentModal({ modalVisible, onClose }) {
  return (
    <Modal isOpen={modalVisible} size="lg" onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body alignItems="center">
          <Text variant="mainTitle" mb={2}>
            Cancel your appointment
          </Text>
          <Text variant="desc" mb={2}>
            Create a Return Request under “My Orders” section of App/Website. Follow the screens
            that come up after tapping on
          </Text>

          <GButton label="Continue" />
          <Button variant="ghost" w="80%" mt={2}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
