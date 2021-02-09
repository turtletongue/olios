import { Box, Image, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LeftMenu = ({ children }) => {
  return (
    <>
    <Box h="100vh" w="3.5rem" bg="white" boxShadow="xl" zIndex="1" position="fixed" left="0" top="0">
      <Flex direction="column" align="center">
        <Link to="/">
          <Image
            mt="1rem"
            w="1.5rem"
            src="https://i.ibb.co/XXWpn1M/LOGO.png"
            alt="Logo"
            cursor="pointer"
          />
        </Link>
        <Flex mt="4.5rem" h="8rem" direction="column" >
          <Link to="/">
            <Image
              w="1rem"
              src="https://i.ibb.co/9sL2HHN/Home.png"
              alt="home"
              cursor="pointer"
            />
          </Link>
          <Spacer />
          <Link to="/basket">
            <Image
              w="1.1rem"
              src="https://i.ibb.co/3M9S617/Basket.png"
              alt="basket"
              cursor="pointer"
            />
          </Link>
          <Spacer />
          <Link to="/search">
            <Image
              w="1rem"
              src="https://i.ibb.co/rvzBzZT/Search.png"
              alt="search"
              cursor="pointer"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
    { children }
    </>
  );
}

export default LeftMenu;