import {
  Center,
  Box,
  Flex,
  Text,
  Spacer,
  Grid,
  useMediaQuery
} from '@chakra-ui/react';
import {
  containerProps,
  textProps,
  gridProps,
  bottomTextProps,
  notFoundProps
} from './category-page.props';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/categories.actions';
import CardWrapper from '../../components/card-wrapper/card-wrapper.component';
import CategoryLink from '../../components/category-link/category-link.component';

const CategoryPage = () => {
  const { categoryPath } = useParams();
  const category = useSelector(
    state => 
      Object.values(state.categories.currentCategories)
        .find(category => category.pathName === categoryPath)
  );
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const dispatch = useDispatch();
  return (
    <>
      {
        category ? 
        <Center bgColor="#f0f0f0" w="100%" minH="100vh">
        {
          category.products.length > 0 ? 
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
                category.products
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
              onClick={() => dispatch(fetchCategories({}))}
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