import {
  Box,
  Center,
  Flex,
  Text,
  Icon,
  Image,
  Stack,
  StackDivider,
  Divider,
  Spacer,
  useMediaQuery
} from '@chakra-ui/react';
import { removeFromBasket, clearFromBasket, addToBasket } from '../../redux/basket/basket.actions';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const Basket = () => {
  const dispatch = useDispatch();
  const basketProducts = useSelector(state => state.basket.products);
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const totalPrice = basketProducts.reduce((acc, product) => acc + +product.price, 0);
  return (
    <Center h="100vh" bgColor="#f1f1f1">
      <Box w="75%" h="75%" ml={isLessThan800 ? "3.5rem" : "0"}>
        <Text
          textAlign="center"
          fontFamily="Lato"
          fontSize="5xl"
        >
          BASKET
        </Text>
        <Flex align="center" mt="1rem">
          {
            isLessThan800 ?
            <></>
            :
            <Text
              textAlign="center"
              fontFamily="Lato"
              fontSize="xl"
              w="15%"
            >IMAGE</Text>
          }
          <Spacer />
          <Text
            textAlign="center"
            fontFamily="Lato"
            fontSize={isLessThan800 ? "sm" : "xl"}
            w={isLessThan800 ? "20%" : "15%"}
          >TITLE</Text>
          <Spacer />
          <Text
            textAlign="center"
            fontFamily="Lato"
            fontSize={isLessThan800 ? "sm" : "xl"}
            w={isLessThan800 ? "25%" : "15%"}
          >QUANTITY</Text>
          <Spacer />
          <Text
            textAlign="center"
            fontFamily="Lato"
            fontSize={isLessThan800 ? "sm" : "xl"}
            w={isLessThan800 ? "20%" : "15%"}
          >PRICE</Text>
          <Spacer />
          <Text
            textAlign="center"
            fontFamily="Lato"
            fontSize={isLessThan800 ? "sm" : "xl"}
            w={isLessThan800 ? "25%" : "15%"}
          >REMOVE</Text>
        </Flex>
        <Divider h="0.5rem" mb="1rem" />
        <Stack
          w="100%"
          divider={<StackDivider borderColor="gray.100" />}
        >
          {
            basketProducts.map(product => {
              return <Flex bgColor="white" align="center" key={product.id} pt="1rem" pb="1rem">
                {
                  isLessThan800 ?
                  <></>
                  :
                  <Image src={product.imageUrl} h="5rem" ml="3rem" />
                }
                <Spacer />
                <Text
                  textAlign="center"
                  fontFamily="Lato"
                  fontSize={isLessThan800 ? "md" : "xl"}
                  w={isLessThan800 ? "20%" : "15%"}
                >
                  { product.title.toUpperCase() }
                </Text>
                <Spacer />
                <Flex align="center">
                  <Icon
                    as={AiOutlineLeft}
                    w={5}
                    h={5}
                    cursor="pointer"
                    onClick={() => dispatch(removeFromBasket(product))}
                  />
                  <Text
                    textAlign="center"
                    fontFamily="Lato"
                    fontSize="lg"
                    fontWeight="700"
                    ml="0.5rem"
                    mr="0.5rem"
                    w={isLessThan800 ? "20%" : "15%"}
                  >
                    { product.quantity }
                  </Text>
                  <Icon
                    as={AiOutlineRight}
                    w={5}
                    h={5}
                    cursor="pointer"
                    onClick={() => dispatch(addToBasket({ ...product, quantity: 1 }))}
                  />
                </Flex>
                <Spacer />
                <Text
                  textAlign="center"
                  fontFamily="Lato"
                  fontSize="lg"
                  fontWeight="700"
                  w={isLessThan800 ? "20%" : "15%"}
                >
                  ${ product.price }
                </Text>
                <Spacer />
                <Icon
                  as={AiOutlineClose}
                  color="red.500"
                  w={5}
                  h={5}
                  cursor="pointer"
                  w={isLessThan800 ? "20%" : "15%"}
                  onClick={() => dispatch(clearFromBasket(product))}
                />
              </Flex>
            })
          }
        </Stack>
        <Flex align="center" mt="2rem">
          <Text
            textAlign="center"
            fontFamily="Lato"
            fontSize={isLessThan800 ? "xl" : "2xl"}
            w={isLessThan800 ? "20%" : "15%"}
          >TOTAL: ${totalPrice}</Text>
          <Spacer />
          <StripeButton price={totalPrice} />
        </Flex>
      </Box>
    </Center>
  );
}

export default Basket;