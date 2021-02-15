import { Center, Box, useMediaQuery } from '@chakra-ui/react';

const GrayContainer = ({ children }) => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Box minH="100vh" bgColor="#f1f1f1">
      <Center h="100%">
        <Box w="75%" h="85%" ml={isLessThan800 ? "3.5rem" : "0"} mt="2rem">
          { children }
        </Box>
      </Center>
    </Box>
  );
}

export default GrayContainer;