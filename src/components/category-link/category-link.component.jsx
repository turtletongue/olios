import { Link } from 'react-router-dom';
import { GridItem, Flex, Spacer, Image, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHamburgerMenu } from '../../redux/burger-menu/burger-menu.actions';

const CategoryLink = ({ name, pathName, imageUrl }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.burgerMenu.isOpen);
  return (
    <>
      <GridItem
        as={Link}
        to={`/shop/${pathName}`}
        className="menu-item"
        id={pathName}
        d="inline-flex"
        w="8rem"
        onClick={() => isOpen ? dispatch(toggleHamburgerMenu()) : {} }
      >
        <Flex align="center">
          <Text fontSize="0.8rem" fontFamily="Lato" color="#c1c1c1" h="1rem">
            { name.toUpperCase() }
          </Text>
        </Flex>
        <Spacer />
        <Image src={ imageUrl } w="2rem" h="auto" />
      </GridItem>
    </>
  );
}

export default CategoryLink;