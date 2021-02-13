import { Center, Box, useMediaQuery } from '@chakra-ui/react';

const BasketContainer = ({ children }) => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Center h="100vh" bgColor="#f1f1f1">
      <Box w="75%" h="75%" ml={isLessThan800 ? "3.5rem" : "0"}>
        { children }
      </Box>
    </Center>
  );
}

export default BasketContainer;