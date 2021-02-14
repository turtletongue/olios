import { useEffect } from 'react';
import { Center, Box, Flex, Text, Spacer, Grid, useMediaQuery } from '@chakra-ui/react';
import { containerProps, textProps, gridProps, bottomTextProps, notFoundProps } from './category-page.props';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { startFetchCategories, startFetchCategoryProducts, changeProductsOffset } from '../../redux/categories/categories.actions';
import CardWrapper from '../../components/card-wrapper/card-wrapper.component';
import CategoryLink from '../../components/category-link/category-link.component';

const CategoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchCategories());
  }, [startFetchCategories]);

  const { categoryPath } = useParams();
  const category = useSelector(
    state => state.categories.currentCategories
      .find(category =>  category.path === `/${categoryPath}`)
  );

  useEffect(() => {
    if (category) {
      dispatch(startFetchCategoryProducts(category.id, 5));
    }
  }, [category]);

  const products = useSelector(state => state.categories.categoryProducts);
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <>
      {
        category ? 
        <Center bgColor="#f0f0f0" w="100%" minH="100vh">
        {
          products.length > 0 ? 
          <Box w={isLessThan800 ? "75%" : "60%"} {...containerProps}>
            <Flex direction={ isLessThan800 ? "column" : "row" }>
              <Text fontSize={isLessThan800 ? "3xl" : "4xl"} {...textProps}>
                PRODUCTS
              </Text>
              <Spacer />
              <Center w="8rem">
                <CategoryLink { ...category } />
              </Center>
            </Flex>
            <Grid {...gridProps}>
              {
                products
                  .map(product => {
                    return <CardWrapper
                      { ...product }
                      cols={isLessThan800 ? 4 : product.cols}
                      key={product.id}
                    />
                })
              }
            </Grid>
            <Text
              onClick={() => {
                dispatch(startFetchCategoryProducts(category.id, products.length + 4));
              }}
              sx={{
                "&:hover": {
                  color: "#3182ce",
                  cursor: "pointer"
                }
              }}
              {...textProps}
              {...bottomTextProps}
            >
              SHOW MORE PRODUCTS
            </Text>
        </Box>
        :
        <Text {...textProps} {...notFoundProps}>NO PRODUCTS FOUND</Text>
        }
      </Center>
      :
      <Center w="100%" h="100vh">
        <Text {...textProps} {...notFoundProps}>CATEGORY NOT FOUND</Text>
      </Center>
    }
    </>
  );
}

export default CategoryPage;