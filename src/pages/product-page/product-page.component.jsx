import { useParams } from 'react-router-dom';
import {
  Box,
  Icon,
  Flex,
  Text,
  Image,
  Center,
  Spacer,
  Input,
  Button,
  useMediaQuery
} from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import CategoryLink from '../../components/category-link/category-link.component';
import CardWrapper from '../../components/card-wrapper/card-wrapper.component';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const { categoryPath, productId } = useParams();
  const category = useSelector(state => 
      Object
        .values(state.categories.currentCategories)
        .find(category => category.pathName === categoryPath)
  );
  const product = category.products.find(product => product.id === productId);
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");
  return (
    <>
      {
      product ? 
      <Flex direction={isLessThan850 ? "column" : "row"} ml="3.5rem">
        <Box
          bgColor="white"
          boxShadow="lg"
          w={isLessThan850 ? "100%" : "40%"}
          h={isLessThan850 ? "auto" : "100vh"}
        >
          <Flex w="100%" p="2rem" justify={isLessThan850 ? "start" : "flex-end"} align="center">
            <Text
              fontSize="0.9rem"
              fontFamily="Lato"
            >{ product.likes }</Text>
            <Icon
              as={AiOutlineHeart}
              w={5}
              h={5}
              ml="0.3rem"
              color="pink.300"
              cursor="pointer"
            />
          </Flex>
          <Center w="100%" mt={isLessThan850 ? "0" : "4rem"}>
            <Image src={product.imageUrl} w="65%" alt={product.name} />
          </Center>
        </Box>
        <Box w={isLessThan850 ? "100%" : "60%"}>
          <Box w="100%" h="70%" bgColor="#f0f0f0">
            <Box w={isLessThan850 ? "100%" : "85%"} p={isLessThan850 ? "1rem" : "4rem"}>
              <Flex w="100%" direction={isLessThan850 ? "column" : "row"}>
                <Text
                  mb={isLessThan850 ? "1rem" : "0"}
                  fontSize="2xl"
                  fontFamily="Lato"
                >
                  PRODUCTS
                </Text>
                <Spacer />
                <CategoryLink
                  name={category.name}
                  pathName={category.pathName}
                  imageUrl={category.imageUrl}
                />
              </Flex>
              <Text
                mt={isLessThan850 ? "2rem" : "5rem"}
                fontSize="4xl"
                fontFamily="Lato"
                color="blue"
              >
                { product.title.toUpperCase() }
              </Text>
              <Text
                mt="1rem"
                maxWidth="20rem"
                fontSize="sm"
                color="#c1c1c1"
                fontFamily="Lato"
              >
                { product.description } 
              </Text>
              <Flex mt="3rem" direction={isLessThan850 ? "column" : "row"}>
                <Box>
                  <Text
                    fontSize="xs"
                  >
                    COST
                  </Text>
                  <Flex>
                    <Text
                      fontWeight="700"
                      fontSize="2xl"
                      fontFamily="Lato"
                      color="blue"
                    >
                      ${ product.price }
                    </Text>
                    <Text
                      ml="0.6rem"
                      fontWeight="700"
                      fontSize="0.7rem"
                      textDecoration="line-through"
                      fontFamily="Lato"
                    >
                      ${ product.oldPrice }
                    </Text>
                  </Flex>
                </Box>
                <Spacer />
                <Flex mt={isLessThan850 ? "2rem" : "0"}>
                  <Box>
                    <Text
                      fontSize="xs"
                    >
                      QUANTITY
                    </Text>
                    <Input
                      borderRadius="50px"
                      bgColor="white"
                      w="4rem"
                      h="2rem"
                      defaultValue="1"
                    />
                    <Button ml="1rem" colorScheme="blue" borderRadius="50px" h="2rem">
                      <Text
                        fontSize="xs"
                      >
                        ADD TO CART
                      </Text>
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
          <Flex h="30%" ml="0.5rem">
            {
              category.products
                .filter(p => p.id !== product.id)
                .slice(0, 3)
                .map(p => {
                  return <CardWrapper
                    mini
                    { ...p }
                    key={p.id}
                    path={`${categoryPath}/${p.id}`}
                    price={false}
                  />
                })
            }
          </Flex>
        </Box>
      </Flex>
      :
      <Center h="100vh">
        <Text
          ml="5.5rem"
          mt="1.5rem"
          fontSize="3xl"
          fontFamily="Lato"
          fontWeight="700"
          color="#c1c1c1"
        >PRODUCT NOT FOUND</Text>
      </Center>
      }
    </>
  );
}

export default ProductPage;