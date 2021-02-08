import { Link } from 'react-router-dom';
import { GridItem, Flex, Spacer, Image, Text } from '@chakra-ui/react';

const CategoryLink = ({ categoryName, pathName, imageUrl }) => {
  return (
    <GridItem
      as={Link}
      to={`/shop/${pathName}`}
      className="menu-item"
      id={pathName}
      d="inline-flex"
      w="100%"
    >
      <Flex align="center">
        <Text fontSize="0.8rem" fontFamily="Lato" color="#c1c1c1" h="1rem">
          { categoryName.toUpperCase() }
        </Text>
      </Flex>
      <Spacer />
      <Image src={ imageUrl } w="2rem" h="auto" />
    </GridItem>
  );
}

export default CategoryLink;