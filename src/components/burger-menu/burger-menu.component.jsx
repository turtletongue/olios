import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styles from './burger-menu.styles';
import { useSelector } from 'react-redux';
import { Grid, Flex, Text, Divider } from '@chakra-ui/react';
import CategoryLink from '../category-link/category-link.component';

const BurgerMenu = () => {
  const isOpen = useSelector(state => state.burgerMenu.isOpen);
  const data = [
    {
      id: 1,
      categoryName: 'Living Room',
      pathName: 'living-room',
      imageUrl: 'https://i.ibb.co/LhRG66B/living.png'
    },
    {
      id: 2,
      categoryName: 'Office',
      pathName: 'office',
      imageUrl: 'https://i.ibb.co/MgtbjJ0/3535.png'
    },
    {
      id: 3,
      categoryName: 'For Kids',
      pathName: 'for-kids',
      imageUrl: 'https://i.ibb.co/tqGw0dz/545.png'
    },
    {
      id: 4,
      categoryName: 'Kitchen',
      pathName: 'kitchen',
      imageUrl: 'https://i.ibb.co/CVkvY4q/345.png'
    },
    {
      id: 5,
      categoryName: 'Accessories',
      pathName: 'accessories',
      imageUrl: 'https://i.ibb.co/q02f2p9/123.png'
    }
  ]
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
      <Flex w="100%" align="center" direction="column">
        <Grid templateRows="repeat(5, 1fr)" w="65%" mt="8rem" gap="2.5rem">
          {
            data.map(category => {
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
  );
}

export default BurgerMenu;