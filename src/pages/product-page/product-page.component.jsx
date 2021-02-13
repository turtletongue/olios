import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Center,
  Spacer,
  useMediaQuery
} from '@chakra-ui/react';
import {
  textProps,
  notFoundProps,
  descriptionProps
} from './product-page.props';
import CategoryLink from '../../components/category-link/category-link.component';
import CardWrapper from '../../components/card-wrapper/card-wrapper.component';
import { useSelector } from 'react-redux';
import AddToCartGroup from '../../components/add-to-cart-group/add-to-cart-group.component';
import CostGroup from '../../components/cost-group/cost-group.component';
import ProductInformationContainer from '../../components/product-information-container/product-information-container.component';
import ProductImageContainer from '../../components/product-image-container/product-image-container.component';

const ProductPage = () => {
  const { categoryPath, productId } = useParams();
  const category = useSelector(state => 
      Object
        .values(state.categories.currentCategories)
        .find(category => category.pathName === categoryPath)
  );
  const product = category.products.find(product => product.id === productId);
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");
  return (
    <>
      {
      product ? 
      <Flex direction={isLessThan850 ? "column" : "row"} ml="3.5rem">
        <ProductImageContainer product={product} />
        <Box w={isLessThan850 ? "100%" : "60%"}>
          <ProductInformationContainer>
            <Flex w="100%" direction={isLessThan850 ? "column" : "row"}>
              <Text
                mb={isLessThan850 ? "1rem" : "0"}
                fontSize="2xl"
                {...textProps}
              >
                PRODUCTS
              </Text>
              <Spacer />
              <CategoryLink
                name={category.name}
                pathName={category.pathName}
                imageUrl={category.imageUrl}
              />
            </Flex>
            <Text
              mt={isLessThan850 ? "2rem" : "5rem"}
              fontSize="4xl"
              color="blue"
              {...textProps}
            >
              { product.title.toUpperCase() }
            </Text>
            <Text {...textProps} {...descriptionProps}>
              { product.description } 
            </Text>
            <Flex mt="3rem" direction={isLessThan850 ? "column" : "row"}>
              <CostGroup product={product} />
              <Spacer />
              <AddToCartGroup />
            </Flex>
          </ProductInformationContainer>
          <Flex h="30%" ml="0.5rem">
            {
              category.products
                .filter(p => p.id !== product.id)
                .slice(0, 3)
                .map(p => {
                  return <CardWrapper
                    mini
                    { ...p }
                    key={p.id}
                    price={false}
                  />
                })
            }
          </Flex>
        </Box>
      </Flex>
      :
      <Center h="100vh">
        <Text {...textProps} {...notFoundProps}>CATEGORY NOT FOUND</Text>
      </Center>
      }
    </>
  );
}

export default ProductPage;