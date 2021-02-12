import {
  GridItem,
  Center,
  Box,
  Image,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { textProps } from './card.props';

const Card = ({ title, path, imageUrl, price, cols, mini }) => {
  return (
    <GridItem
      colSpan={cols}
      as={Link}
      to={path}
    >
      <Box overflow="hidden" bgColor="white" p="1rem">
        <Center mb="1rem">
          <Image src={imageUrl} h={ mini ? "4rem" : "6rem"} w="auto" alt={title}/>
        </Center>
        <Box>
          <Text fontSize={mini ? "sm" : "xl"} {...textProps}>
            { title.toUpperCase() }
          </Text>
          <Text fontSize={mini ? "xs" : "sm"} color="#c1c1c1" {...textProps}>
            Lorem ipsum dolor sit.
          </Text>
          {
            price ?
              <Text
              mt="0.5rem"
              fontSize="sm"
              {...textProps}
              fontWeight="700"
              color="blue"
            >
              ${ price }
            </Text>
            :
            <></>
          }
        </Box>
      </Box>
    </GridItem>
  );
}

export default Card;