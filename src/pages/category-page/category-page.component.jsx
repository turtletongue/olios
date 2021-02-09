import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Center,
  Box,
  Flex,
  Text,
  Spacer,
  Grid,
  useMediaQuery
} from '@chakra-ui/react';
import CardWrapper from '../../components/card-wrapper/card-wrapper.component';
import CategoryLink from '../../components/category-link/category-link.component';
import { fetchCategories } from '../../redux/categories/categories.actions';

const CategoryPage = () => {
  const { categoryPath } = useParams();
  const category = useSelector(
    state => 
      Object.values(state.categories.currentCategories)
        .find(category => category.pathName === categoryPath)
  );
  const categories = useSelector(state => state.categories.currentCategories);
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const dispatch = useDispatch();
  return (
    <>
      <Center bgColor="#f0f0f0" w="100%" minH="100vh">
        {
          category.products.length > 0 ? 
          <Box
            w={isLessThan800 ? "75%" : "60%"}
            h="95%"
            ml="3.5rem"
            mt="1.5rem"
            mb="1rem"
        >
          <Flex direction={ isLessThan800 ? "column" : "row" }>
            <Text
              fontSize={isLessThan800 ? "3xl" : "4xl"}
              fontFamily="Lato"
              fontWeight="400"
            >
              PRODUCTS
            </Text>
            <Spacer />
            <Center w="8rem">
              <CategoryLink { ...category } />
            </Center>
          </Flex>
          <Grid
            templateColumns="repeat(auto-fill, minmax(175px, 1fr))"
            gap="1rem"
            mt="1rem"
            autoFlow="row"
          >
            {
              category.products
                .map(product => {
                  return <CardWrapper
                    { ...product }
                    cols={isLessThan800 ? 4 : product.cols}
                    key={product.id}
                    path={`${categoryPath}/${product.id}`}
                  />
              })
            }
          </Grid>
          <Text
            onClick={() => {
              dispatch(fetchCategories({...categories, livingRoom: { ...categories.livingRoom, products: [...categories.livingRoom.products, {
                id: "6",
                price: "69",
                size: "sm",
                cols: "1",
                name: "Red Seat",
                imageUrl: "https://i.ibb.co/sV1GNFK/red-seat.png",
                likes: 0
              }]}}));
            }}
            mt="2rem"
            textAlign="center"
            color="blue"
            fontSize="1rem"
            fontFamily="Lato"
            sx={{
              "&:hover": {
                color: "#3182ce",
                cursor: "pointer"
              }
            }}
          >
            SHOW MORE PRODUCTS
          </Text>
        </Box>
        :
        <Text
          ml="5.5rem"
          mt="1.5rem"
          fontSize="3xl"
          fontFamily="Lato"
          fontWeight="700"
          color="#c1c1c1"
        >NO PRODUCTS FOUND</Text>
        }
      </Center>
    </>
  );
}

export default CategoryPage;