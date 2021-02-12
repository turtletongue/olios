import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Image,
  Center,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useMediaQuery
} from '@chakra-ui/react';
import {
  textProps,
  notFoundProps,
  numberInputProps,
  buttonProps,
  oldPriceProps,
  priceProps,
  descriptionProps
} from './product-page.props';
import CategoryLink from '../../components/category-link/category-link.component';
import CardWrapper from '../../components/card-wrapper/card-wrapper.component';
import { addToBasket } from '../../redux/basket/basket.actions';
import { changeQuantity } from '../../redux/product/product.actions'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ProductPage = ({ history }) => {
  const dispatch = useDispatch();
  const { categoryPath, productId } = useParams();
  const category = useSelector(state => 
      Object
        .values(state.categories.currentCategories)
        .find(category => category.pathName === categoryPath)
  );
  const product = category.products.find(product => product.id === productId);
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");
  const quantity = useSelector(state => state.product.quantity);
  return (
    <>
      {
      product ? 
      <Flex direction={isLessThan850 ? "column" : "row"} ml="3.5rem">
        <Center
          bgColor="white"
          boxShadow="lg"
          w={isLessThan850 ? "100%" : "40%"}
          h={isLessThan850 ? "auto" : "100vh"}
        >
          <Image src={product.imageUrl} w="65%" alt={product.name} />
        </Center>
        <Box w={isLessThan850 ? "100%" : "60%"}>
          <Box w="100%" h="70%" bgColor="#f0f0f0">
            <Box w={isLessThan850 ? "100%" : "85%"} p={isLessThan850 ? "1rem" : "4rem"}>
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
                <Box>
                  <Text fontSize="xs">
                    COST
                  </Text>
                  <Flex>
                    <Text {...textProps} {...priceProps}>
                      ${ product.price }
                    </Text>
                    <Text {...textProps} {...oldPriceProps}>
                      ${ product.oldPrice }
                    </Text>
                  </Flex>
                </Box>
                <Spacer />
                <Flex mt={isLessThan850 ? "2rem" : "0"}>
                  <Box>
                    <Text fontSize="xs">
                      QUANTITY
                    </Text>
                    <Flex align="center">
                      <NumberInput
                        {...numberInputProps}
                        onChange={(value) => dispatch(changeQuantity(value))}
                      >
                        <NumberInputField id="quantityField" value={quantity} />
                        <NumberInputStepper>
                          <NumberIncrementStepper h="1rem" />
                          <NumberDecrementStepper h="1rem" />
                        </NumberInputStepper>
                      </NumberInput>
                      <Button
                        {...buttonProps}
                        onClick={() => {
                          dispatch(addToBasket({ ...product, quantity }));
                          dispatch(changeQuantity("1"));
                          history.push('/basket')
                        }}
                      >
                        <Text fontSize="xs">
                          ADD TO CART
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
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

export default withRouter(ProductPage);