import { useEffect } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import styles from './burger-menu.styles';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Flex } from '@chakra-ui/react';
import CategoryLink from '../category-link/category-link.component';
import HamburgerCircle from '../hamburger-circle/hamburger-circle.component';
import { menuProps } from './burger-menu.props';
import { startFetchCategories } from '../../redux/categories/categories.actions';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchCategories());
  }, [startFetchCategories, dispatch]);
  const isOpen = useSelector(state => state.burgerMenu.isOpen);
  const categories = useSelector(state => state.categories.currentCategories);
  return (
    <>
      <HamburgerCircle />
      <Menu 
        isOpen={isOpen}
        styles={styles}
        {...menuProps}
      >
        <Flex w="100%" align="center" direction="column">
          <Grid templateRows="repeat(5, 1fr)" w="65%" mt="8rem" gap="2.5rem">
            {
              categories.map(category => {
                return <CategoryLink key={category.id} { ...category } />
              })
            }
          </Grid>
        </Flex>
      </Menu>
    </>
  );
}

export default BurgerMenu;