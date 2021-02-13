import { GridItem, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SearchResult = ({ path, imageUrl, title }) => {
  return (
    <GridItem as={Link} to={path}>
      <Flex align="center">
        <Image src={imageUrl} h="6rem" alt={title} />
        <Text fontSize="3xl" fontFamily="Lato">
          { title.toUpperCase() }
        </Text>
      </Flex>
    </GridItem>
  );
}

export default SearchResult;