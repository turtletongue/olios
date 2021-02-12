import {
  Box,
  Text,
  Input,
  Center,
  Grid,
} from '@chakra-ui/react';
import {
  pageContainerProps,
  searchInputProps,
  littleTextProps,
  blackBoldTextProps
} from './search.props';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../../redux/search/search.actions';
import SearchResult from '../../components/search-result/search-result.component';

const Search = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.currentCategories);
  const products = Object.values(categories).map(category => category.products).flat();
  const input = useSelector(state => state.search.input);
  const productsFound = products.filter(product => 
    product.title.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <Center {...pageContainerProps}>
      <Box w="65%" h="75%">
        <Input 
          onChange={(event) => dispatch(changeInput(event.target.value))}
          value={input}
          {...searchInputProps}
        />
        <Text {...littleTextProps}>
          Type product that are you looking for
        </Text>
        <Grid mt="1rem" templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="2rem">
          {
            productsFound.map(product => {
              return <SearchResult
                key={product.id}
                path={product.path}
                title={product.title}
                imageUrl={product.imageUrl}
              />
            })
          }
        </Grid>
        <Text {...blackBoldTextProps}>
          { productsFound.length } Searched result
        </Text>
      </Box>
    </Center>
  );
}

export default Search;