import { useEffect } from 'react';
import { Box, Text, Input, Center, Grid } from '@chakra-ui/react';
import { pageContainerProps, searchInputProps, littleTextProps, blackBoldTextProps } from './search.props';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../../redux/search/search.actions';
import SearchResult from '../../components/search-result/search-result.component';
import { startFetchProductByCriteria } from '../../redux/products/products.actions';

const Search = () => {
  const dispatch = useDispatch();

  const foundedProducts = useSelector(state => state.products.allProducts);
  const input = useSelector(state => state.search.input);
  useEffect(() => {
    dispatch(startFetchProductByCriteria(input));
  }, [input]);

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
            foundedProducts.map(product => {
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
          { foundedProducts.length } Searched result
        </Text>
      </Box>
    </Center>
  );
}

export default Search;