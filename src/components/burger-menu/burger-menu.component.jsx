import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styles from './burger-menu.styles';
import { useSelector } from 'react-redux';
import { Grid, GridItem, Image, Spacer, Flex, Text } from '@chakra-ui/react';

const BurgerMenu = () => {
  const isOpen = useSelector(state => state.burgerMenu.isOpen);
  return (
    <Menu 
      customBurgerIcon={false}
      customCrossIcon={ false }
      isOpen={isOpen}
      right
      zIndex="1"
      styles={ styles }
      disableCloseOnEsc
      disableOverlayClick
    >
      <Flex w="100%" justify="center">
        <Grid templateRows="repeat(5, 1fr)" w="65%" mt="8rem" gap="2.5rem">
          <GridItem
            as={Link}
            to="/shop/living-room"
            className="menu-item"
            id="livingRoom"
            d="inline-flex"
            w="100%"
          >
            <Flex align="center">
              <Text fontSize="0.8rem" fontFamily="Lato" color="#c1c1c1" h="1rem">
                LIVING ROOM
              </Text>
            </Flex>
            <Spacer />
            <Image src="https://i.ibb.co/LhRG66B/living.png" w="2rem" h="auto" />
          </GridItem>
          <GridItem
            as={Link}
            to="/shop/office"
            className="menu-item"
            id="office"
            d="inline-flex" 
            w="100%"
          >
            <Flex align="center">
              <Text fontSize="0.8rem" fontFamily="Lato" color="#c1c1c1" h="1rem">
                OFFICE
              </Text>
            </Flex>
            <Spacer />
            <Image src="https://i.ibb.co/MgtbjJ0/3535.png" w="2rem" h="auto" />
          </GridItem>
          <GridItem
            as={Link}
            to="/shop/for-kids"
            className="menu-item"
            id="forKids"
            d="inline-flex"
            w="100%"
          >
            <Flex align="center">
              <Text fontSize="0.8rem" fontFamily="Lato" color="#c1c1c1" h="1rem">
                FOR KIDS
              </Text>
            </Flex>
            <Spacer />
            <Image src="https://i.ibb.co/tqGw0dz/545.png" w="2rem" h="auto" />
          </GridItem>
          <GridItem
            as={Link}
            to="/shop/kitchen"
            className="menu-item"
            id="kitchen"
            d="inline-flex"
            w="100%"
          >
            <Flex align="center">
              <Text fontSize="0.8rem" fontFamily="Lato" color="#c1c1c1" h="1rem">
                KITCHEN
              </Text>
            </Flex>
            <Spacer />
            <Image src="https://i.ibb.co/CVkvY4q/345.png" w="2rem" h="auto" />
          </GridItem>
          <GridItem
            as={Link}
            to="/shop/accessories"
            className="menu-item"
            id="accessories"
            d="inline-flex"
            w="100%"
          >
            <Flex align="center">
              <Text fontSize="0.8rem" fontFamily="Lato" color="#c1c1c1" h="1rem">
                ACCESSORIES
              </Text>
            </Flex>
            <Spacer />
            <Image src="https://i.ibb.co/q02f2p9/123.png" w="2rem" h="auto" />
          </GridItem>
        </Grid>
      </Flex>
    </Menu>
  );
}

export default BurgerMenu;