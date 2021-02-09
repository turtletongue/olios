import {
  Flex,
  Box,
  Text,
  Button,
  useMediaQuery
} from '@chakra-ui/react';

const Homepage = () => {
  const [isLargerThan1064] = useMediaQuery("(min-width: 1064px)");
  const [isLargerThan340] = useMediaQuery("(min-width: 340px)");
  return (
    <>
      <Box
        h="100vh"
        bgImage="url('https://i.ibb.co/JHFs68F/main-photo-background.png')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex direction="column" align="center">
          { isLargerThan1064 ? 
            <Text
            fontFamily="Lato"
            fontWeight="700"
            fontSize="15rem"
            color="#e7e7e7"
            position="absolute"
            top="-3rem"
          >
            NEWEST
          </Text>
          :
          <></> }
          <Flex direction="column" align="center" zIndex="1" ml="3.5rem">
            <Text
              mt="3.5rem"
              fontFamily="Lato"
              fontWeight="300"
              fontSize={ isLargerThan340 ? "8xl" : "7xl"}
            >
              OLIOS
            </Text>
            <Text
              fontFamily="Lato"
              fontWeight="300"
              fontSize={ isLargerThan340 ? "xl" : "md"}
            >
              NEWEST FURNITURE SHOP
            </Text>
            <Button
              mt="1rem"
              colorScheme="blue"
              fontFamily="Lato"
              fontWeight="300"
              fontSize="xs"
              h="2rem"
              borderRadius="30px"
            >
              VIEW MORE
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Homepage;