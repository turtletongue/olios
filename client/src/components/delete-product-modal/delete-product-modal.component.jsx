import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/admin/admin.actions';

const DeleteProductModal = ({ isOpen, onClose, productId }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const input = useSelector(state => state.search.input);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure that you want to delete the product?</ModalBody>
        <ModalFooter>
          <Button onClick={() => onClose()}>No</Button>
          <Button
            colorScheme="red"
            ml="1rem"
            onClick={() => {
              onClose();
              dispatch(deleteProduct(productId, token, input));
            }}
          >Yes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteProductModal;