import { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProduct,
  changeModalCategoryId,
  changeModalCols,
  changeModalDescription,
  changeModalPrice,
  changeModalProductType,
  changeModalTitle,
  changeModalFile,
  clearAll,
  fetchProductById,
  editProduct
} from '../../redux/admin/admin.actions';

const AddOrEditProductModal = ({ edit, productId, isOpen, onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (edit && isOpen === true) {
      dispatch(fetchProductById(productId));
    }
    if (edit && isOpen === false) {
      dispatch(clearAll());
    }
  }, [isOpen]);
  const data = useSelector(state => state.admin);
  const token = useSelector(state => state.auth.token);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ !edit ? "Create" : "Edit" } Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              value={data.title}
              onChange={(event) => dispatch(changeModalTitle(event.target.value))}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Product Type</FormLabel>
            <Input
              placeholder="Product Type"
              value={data.productType}
              onChange={(event) => dispatch(changeModalProductType(event.target.value))}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input
              placeholder="Price"
              value={data.price}
              onChange={(event) => dispatch(changeModalPrice(event.target.value))}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Size</FormLabel>
            <Input
              placeholder="Size"
              value={data.cols}
              onChange={(event) => dispatch(changeModalCols(event.target.value))}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              border="0"
              onChange={(event) => dispatch(changeModalFile(event.target.files[0]))}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Description"
              value={data.description}
              onChange={(event) => dispatch(changeModalDescription(event.target.value))}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Category ID</FormLabel>
            <Input
              placeholder="Category ID"
              value={data.categoryId}
              onChange={(event) => dispatch(changeModalCategoryId(event.target.value))}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => {
            onClose();
            edit ? 
              dispatch(editProduct(data, token))
            :
              dispatch(addProduct(data, token));
            dispatch(clearAll());
          }}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddOrEditProductModal;