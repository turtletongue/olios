import { Grid, GridItem, Image, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LeftMenu = ({ children }) => {
  return (
    <Grid
    h="100vh"
    templateRows="1fr"
    templateColumns="3.5rem 1fr"
  >
    <GridItem colSpan="1" h="100vh" w="100%" bg="white" boxShadow="xl" zIndex="1">
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
    </GridItem>
    { children }
  </Grid>
  );
}

export default LeftMenu;