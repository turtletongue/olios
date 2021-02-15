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
  useMediaQuery
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { textProps } from './admin-page.props';
import GrayContainer from '../../components/gray-container/gray-container.component';
import TableTitle from '../../components/table-title/table-title.component';
import AdminItem from '../../components/admin-item/admin-item.component';
import { changeInput } from '../../redux/search/search.actions';
import { startFetchProductByCriteria } from '../../redux/products/products.actions';
import { BsPlusCircle } from 'react-icons/bs';

const AdminPage = () => {
  const dispatch = useDispatch();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const foundedProducts = useSelector(state => state.products.allProducts);
  const input = useSelector(state => state.search.input);
  useEffect(() => {
    dispatch(startFetchProductByCriteria(input));
  }, [input]);
  return (
    <GrayContainer>
      <Flex w="100%" align="center" direction={isLessThan800 ? "column" : "row"}>
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
        <Icon 
          ml="0.5rem"
          mt="0.5rem"
          as={BsPlusCircle}
          h={8}
          w={8}
          cursor="pointer"
          sx={{
            '&:hover': {
              color: "blue.500"
            }
          }}
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