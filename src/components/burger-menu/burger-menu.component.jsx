import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styles from './burger-menu.styles';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Flex, Text, Divider, Circle } from '@chakra-ui/react';
import CategoryLink from '../category-link/category-link.component';
import Hamburger from 'hamburger-react';
import { toggleHamburgerMenu } from '../../redux/burger-menu/burger-menu.actions';

const BurgerMenu = () => {
  const isOpen = useSelector(state => state.burgerMenu.isOpen);
  const dispatch = useDispatch();
  const categories = useSelector(state => Object.values(state.categories.currentCategories));
  return (
    <>
      <Circle
        boxShadow="base"
        size="3rem"
        bg="white"
        position="fixed"
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
        <Flex w="100%" align="center" direction="column">
          <Grid templateRows="repeat(5, 1fr)" w="65%" mt="8rem" gap="2.5rem">
            {
              categories.map(category => {
                return <CategoryLink key={category.id} { ...category } />
              })
            }
          </Grid>
          <Flex
            direction="column"
            align="center"
            className="menu-item"
            id="shop"
            mt="2rem"
            sx={{
              "&:hover > a": {
                color: "#3182ce"
              }
            }}
          >
            <Text
              as={Link}
              to="/shop"
              fontSize="0.8rem"
              color="blue"
              fontFamily="Lato"
              fontWeight="400"
            >
              SHOW ALL CATEGORIES
            </Text>
            <Divider borderColor="blue" w="75%" h="3px" />
          </Flex>
        </Flex>
      </Menu>
    </>
  );
}

export default BurgerMenu;