import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  Text,
} from '@chakra-ui/react';

type DynamicModalProps = Omit<ModalProps, 'children'>;

export default function DynamicModal({ isOpen, onClose }: DynamicModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Modal body text goes here.</Text>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Close</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
