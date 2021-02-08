import {
  Flex,
  GridItem,
  Text,
  Button,
  Circle,
  useMediaQuery
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHamburgerMenu } from '../../redux/hamburger-menu/hamburger-menu.actions';
import Hamburger from 'hamburger-react';
import LeftMenu from '../../components/left-menu/left-menu.component';
import Fonts from '../../components/fonts/fonts.component';
import BurgerMenu from '../../components/burger-menu/burger-menu.component';

const Homepage = () => {
  const [isLargerThan1064] = useMediaQuery("(min-width: 1064px)");
  const isOpen = useSelector(state => state.hamburgerMenu.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <Fonts />
      <Circle
        boxShadow="base"
        size="3rem"
        bg="white"
        position="absolute"
        right="0"
        mt="1rem"
        mr="1rem"
        zIndex="3"
      >
        <Hamburger
          color="#3182ce"
          size="20"
          zIndex="3"
          toggled={isOpen}
          toggle={() => dispatch(toggleHamburgerMenu())}
        />
      </Circle>
      <BurgerMenu />
      <LeftMenu>
        <GridItem 
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
            <Flex direction="column" align="center" zIndex="1">
              <Text
                mt="3.5rem"
                fontFamily="Lato"
                fontWeight="300"
                fontSize="8xl"
              >
                OLIOS
              </Text>
              <Text
                fontFamily="Lato"
                fontWeight="300"
                fontSize="xl"
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
        </GridItem>
      </LeftMenu>
    </>
  );
}

export default Homepage;