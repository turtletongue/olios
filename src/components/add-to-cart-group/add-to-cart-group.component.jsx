import { Flex, Box, Text, useMediaQuery } from '@chakra-ui/react';
import AddToCartButton from '../add-to-cart-button/add-to-cart-button.component';
import QuantityInput from '../quantity-input/quantity-input.component';

const AddToCartGroup = () => {
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");
  return (
    <Flex mt={isLessThan850 ? "2rem" : "0"}>
      <Box>
        <Text fontSize="xs">
          QUANTITY
        </Text>
        <Flex align="center">
          <QuantityInput />
          <AddToCartButton />
        </Flex>
      </Box>
    </Flex>
  );
}

export default AddToCartGroup;