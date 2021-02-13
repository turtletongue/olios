import { Flex, Image, Spacer, Text, Icon, useMediaQuery } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { boldTextProps, quantityProps, iconProps } from './basket-item.props';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { addToBasket, removeFromBasket, clearFromBasket } from '../../redux/basket/basket.actions';

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex bgColor="white" align="center" key={product.id} p="1rem">
      {
        isLessThan800 ?
        <></>
        :
        <Image src={product.imageUrl} h="5rem" ml="1rem" />
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
          onClick={() => dispatch(removeFromBasket(product))}
          {...iconProps}
        />
        <Text
          w={isLessThan800 ? "20%" : "15%"}
          {...quantityProps}
          {...boldTextProps}
        >
          { product.quantity }
        </Text>
        <Icon
          as={AiOutlineRight}
          onClick={() => dispatch(addToBasket({ ...product, quantity: 1 }))}
          {...iconProps}
        />
      </Flex>
      <Spacer />
      <Text
        w={isLessThan800 ? "20%" : "15%"}
        {...boldTextProps}
      >
        ${ product.price }
      </Text>
      <Spacer />
      <Icon
        as={AiOutlineClose}
        color="red.500"
        onClick={() => dispatch(clearFromBasket(product))}
        {...iconProps}
        w={isLessThan800 ? "25%" : "10%"}
      />
    </Flex>
  );
}

export default BasketItem;