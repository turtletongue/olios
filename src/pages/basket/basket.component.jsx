import {
  Box,
  Center,
  Flex,
  Text,
  Stack,
  StackDivider,
  Divider,
  Spacer,
  useMediaQuery
} from '@chakra-ui/react';
import { textProps } from './basket.props';
import { useSelector } from 'react-redux';
import BasketTableTitle from '../../components/basket-table-title/basket-table-title.component';
import BasketItem from '../../components/basket-item/basket-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const Basket = () => {
  const basketProducts = useSelector(state => state.basket.products);
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const totalPrice = basketProducts.reduce((acc, product) => acc + +product.price, 0);
  return (
    <Center h="100vh" bgColor="#f1f1f1">
      <Box w="75%" h="75%" ml={isLessThan800 ? "3.5rem" : "0"}>
        <Text fontSize="5xl" {...textProps}>
          BASKET
        </Text>
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
          <BasketTableTitle>TITLE</BasketTableTitle>
          <Spacer />
          <BasketTableTitle>QUANTITY</BasketTableTitle>
          <Spacer />
          <BasketTableTitle>PRICE</BasketTableTitle>
          <Spacer />
          <BasketTableTitle>REMOVE</BasketTableTitle>
        </Flex>
        <Divider h="0.5rem" mb="1rem" />
        <Stack
          w="100%"
          divider={<StackDivider borderColor="gray.100" />}
        >
          {
            basketProducts.map(product => {
              return <BasketItem product={product} key={product.id} />;
            })
          }
        </Stack>
        <Flex align="center" mt="2rem">
          <Text
            fontSize={isLessThan800 ? "xl" : "2xl"}
            w={isLessThan800 ? "50%" : "15%"}
            {...textProps}
          >TOTAL: ${totalPrice}</Text>
          <Spacer />
          <StripeButton price={totalPrice} />
        </Flex>
      </Box>
    </Center>
  );
}

export default Basket;