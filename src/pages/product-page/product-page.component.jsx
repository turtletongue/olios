import { useParams } from 'react-router-dom';
import {
  Box,
  Icon,
  Flex,
  Text,
  Image,
  Center,
  Spacer
} from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import CategoryLink from '../../components/category-link/category-link.component';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const { categoryPath, productId } = useParams();
  const category = useSelector(state => 
      Object
        .values(state.categories.currentCategories)
        .find(category => category.pathName === categoryPath)
  );
  const product = category.products.find(product => product.id === productId);
  return (
    <Flex ml="3.5rem">
      <Box bgColor="white" boxShadow="lg" w="40%" h="100vh">
        <Flex w="100%" p="2rem" justify="flex-end" align="center">
          <Text
            fontSize="0.9rem"
            fontFamily="Lato"
          >{ product.likes }</Text>
          <Icon as={AiOutlineHeart} w={5} h={5} ml="0.3rem" color="pink.300" />
        </Flex>
        <Center w="100%" mt="4rem">
          <Image src={product.imageUrl} w="65%" alt={product.name} />
        </Center>
      </Box>
      <Box w="60%">
        <Box w="100%" bgColor="#f0f0f0">
          <Box w="85%" p="4rem">
            <Flex w="100%">
              <Text
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
              mt="5rem"
              fontSize="4xl"
              fontFamily="Lato"
              color="blue"
            >
              { product.title.toUpperCase() }
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductPage;