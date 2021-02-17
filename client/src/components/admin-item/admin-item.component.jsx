import { Flex, Image, Spacer, Text, Icon, IconButton, useMediaQuery } from '@chakra-ui/react';
import { useDisclosure } from 'react-use-disclosure';
import { iconProps } from './admin-item.props';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import DeleteProductModal from '../delete-product-modal/delete-product-modal.component';
import AddOrEditProductModal from '../add-or-edit-product-modal/add-or-edit-product-modal.component';

const AdminItem = ({ product }) => {
  const { isOpen: isDeleteModalOpen, open: openDeleteModal, close: closeDeleteModal } = useDisclosure();
  const { isOpen: isEditModalOpen, open: openEditModal, close: closeEditModal } = useDisclosure();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <>
      <AddOrEditProductModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        productId={product.id}
        edit
      />
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        productId={product.id}
      />
      <Flex bgColor="white" align="center" key={product.id} p="1rem">
        {
          isLessThan800 ?
          <></>
          :
          <Image src={product.imageUrl} h="5rem" ml="1rem" />
        }
        <Spacer />
        <Text
          textAlign="center"
          fontFamily="Lato"
          fontSize={isLessThan800 ? "md" : "xl"}
          w={isLessThan800 ? "25%" : "15%"}
        >
          { product.title.toUpperCase() }
        </Text>
        <Spacer />
        <IconButton
          w={isLessThan800 ? "25%" : "10%"}
          colorScheme="blue"
          onClick={() => openEditModal()}
          icon=
          {
            <Icon
              as={AiOutlineEdit}
              {...iconProps}
            />
          }
        />
        <Spacer />
        <IconButton
          w={isLessThan800 ? "25%" : "10%"}
          colorScheme="red"
          onClick={() => openDeleteModal()}
          icon={
            <Icon
              as={AiOutlineClose}
              {...iconProps}
            />
          }
        />
      </Flex>
    </>
  );
}

export default AdminItem;