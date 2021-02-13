import { Box, useMediaQuery } from '@chakra-ui/react';

const ProductInformationContainer = ({ children }) => {
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");
  return (
    <Box w="100%" h="70%" bgColor="#f0f0f0">
      <Box w={isLessThan850 ? "100%" : "85%"} p={isLessThan850 ? "1rem" : "4rem"}>
        { children }
      </Box>
    </Box>
  );
}

export default ProductInformationContainer;