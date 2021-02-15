import { Flex, Image, Spacer, Text, Icon, useMediaQuery } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { iconProps } from './admin-item.props';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';

const AdminItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
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
      <Icon
        as={AiOutlineEdit}
        color="blue.500"
        onClick={() => {}}
        {...iconProps}
        w={isLessThan800 ? "25%" : "10%"}
      />
      <Spacer />
      <Icon
        as={AiOutlineClose}
        color="red.500"
        onClick={() => {}}
        {...iconProps}
        w={isLessThan800 ? "25%" : "10%"}
      />
    </Flex>
  );
}

export default AdminItem;