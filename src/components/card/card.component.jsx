import {
  GridItem,
  Center,
  Box,
  Image,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Card = ({ title, path, imageUrl, price, cols }) => {
  return (
    <GridItem
      colSpan={cols}
      as={Link}
      to={`/shop/${path}`}
    >
      <Box overflow="hidden" bgColor="white" p="1rem">
        <Center mb="1rem">
          <Image src={imageUrl} h="6rem" w="auto" alt={title}/>
        </Center>
        <Box>
          <Text
            fontSize="xl"
            fontFamily="Lato"
            fontWeight="400"
          >
            { title.toUpperCase() }
          </Text>
          <Text
            fontSize="sm"
            fontFamily="Lato"
            fontWeight="400"
            color="#c1c1c1"
          >
            Lorem ipsum dolor sit.
          </Text>
          <Text
            mt="0.5rem"
            fontSize="sm"
            fontFamily="Lato"
            fontWeight="700"
            color="blue"
          >
            ${ price }
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
}

export default Card;