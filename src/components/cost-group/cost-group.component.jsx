import { Box, Text, Flex } from '@chakra-ui/react';
import { oldPriceProps, priceProps, textProps } from './cost-group.props';

const CostGroup = ({ product }) => {
  return (
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
  );
}

export default CostGroup;