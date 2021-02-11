import {
  Box,
  Text,
  Image,
  Input,
  Center,
  Flex,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../../redux/search/search.actions';

const Search = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.currentCategories);
  const products = Object.values(categories).map(category => category.products).flat();
  const input = useSelector(state => state.search.input);
  const productsFound = products.filter(product => 
    product.title.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <Center
      ml="0.5rem"
      h="100vh"
      bgColor="white"
    >
      <Box
        w="65%"
        h="75%"
      >
        <Input 
          variant="flushed"
          w="100%"
          fontFamily="Lato"
          fontSize="4xl"
          mb="0.5rem"
          onChange={(event) => dispatch(changeInput(event.target.value))}
          value={input}
          autoFocus="true"
        />
        <Text
          color="#c1c1c1"
          fontFamily="Lato"
          fontSize="sm"
        >
          Type product that are you looking for
        </Text>
        <Grid mt="1rem" templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="2rem">
          {
            productsFound.map(product => {
              return <GridItem as={Link} to={product.path} key={product.id}>
                <Flex align="center">
                  <Image src={product.imageUrl} h="6rem" alt={product.title} />
                  <Text
                    fontSize="3xl"
                    fontFamily="Lato"
                  >{ product.title.toUpperCase() }</Text>
                </Flex>
              </GridItem>
            })
          }
        </Grid>
        <Text
          mt="2rem"
          fontSize="md"
          fontFamily="Lato"
          fontWeight="700"
        >
          { productsFound.length } Searched result
        </Text>
      </Box>
    </Center>
  );
}

export default Search;