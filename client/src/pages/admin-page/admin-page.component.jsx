import { useEffect } from 'react';
import {
  Text,
  Flex,
  Spacer,
  Input,
  Divider,
  Stack,
  StackDivider,
  Icon,
  IconButton,
  useMediaQuery
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useDisclosure } from 'react-use-disclosure';
import { textProps } from './admin-page.props';
import GrayContainer from '../../components/gray-container/gray-container.component';
import TableTitle from '../../components/table-title/table-title.component';
import AdminItem from '../../components/admin-item/admin-item.component';
import { changeInput } from '../../redux/search/search.actions';
import { startFetchProductByCriteria } from '../../redux/products/products.actions';
import { AiOutlinePlus } from 'react-icons/ai';
import AddOrEditProductModal from '../../components/add-or-edit-product-modal/add-or-edit-product-modal.component';
import { Redirect } from 'react-router-dom';

const AdminPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);
  const { isOpen, open, close } = useDisclosure();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const foundedProducts = useSelector(state => state.products.allProducts);
  const input = useSelector(state => state.search.input);
  useEffect(() => {
    dispatch(startFetchProductByCriteria(input));
  }, [input]);
  if (!isLogged) {
    return <Redirect to="/" />
  }
  return (
    <GrayContainer>
      <AddOrEditProductModal isOpen={isOpen} onClose={close} />
      <Flex
        w="100%"
        align="center"
        direction={isLessThan800 ? "column" : "row"}
        mt={isLessThan800 ? "2rem" : "0" }
      >
        <Text fontSize="5xl" {...textProps}>PRODUCTS</Text>
        <Spacer />
        <Input
          w="16rem"
          bgColor="white"
          placeholder="Type product name here"
          value={input}
          onChange={(event) => dispatch(changeInput(event.target.value))}
        />
        <Spacer />
        <IconButton 
          onClick={() => open()}
          colorScheme="blue"
          ml="0.5rem"
          mt="0.5rem"
          w="5rem"
          icon=
          {
            <Icon 
              as={AiOutlinePlus}
              h={6}
              w={6}
            />
          }
        />
      </Flex>
      <Flex align="center" mt="1rem">
        {
          isLessThan800 ?
          <></>
          :
          <Text
            fontSize="xl"
            w="15%"
            {...textProps}
          >IMAGE</Text>
        }
        <Spacer />
        <TableTitle>TITLE</TableTitle>
        <Spacer />
        <TableTitle>EDIT</TableTitle>
        <Spacer />
        <TableTitle>REMOVE</TableTitle>
      </Flex>
      <Divider h="0.5rem" mb="1rem" />
      <Stack
        w="100%"
        divider={<StackDivider borderColor="gray.100" />}
        mb="1rem"
      >
        {
          foundedProducts.map(product => {
            return <AdminItem product={product} key={product.id} />
          })
        }
      </Stack>
    </GrayContainer>
  );
}

export default AdminPage;