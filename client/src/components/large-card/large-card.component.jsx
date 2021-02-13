import { GridItem, Flex, Center, Image, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LargeCard = ({ title, path, imageUrl, price, cols, size }) => {
  return (
    <GridItem
      colSpan={cols}
      as={Link}
      to={path}
    >
      <Flex overflow="hidden" bgColor="white" h="100%">
        <Center w="100%">
          <Center>
            <Image
              src={imageUrl}
              h={ (size === 'lg' || size === 'md') ? "12rem" : "6rem"}
              w="auto"
              alt={title}
            />
          </Center>
          <Center m="1rem">
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
              {
                price ?
                <Text
                  mt="0.5rem"
                  fontSize="sm"
                  fontFamily="Lato"
                  fontWeight="700"
                  color="blue"
                >
                  ${ price }
                </Text>
                :
                <></>
              }
            </Box>
          </Center>
        </Center>
      </Flex>
    </GridItem>
  );
}

export default LargeCard;