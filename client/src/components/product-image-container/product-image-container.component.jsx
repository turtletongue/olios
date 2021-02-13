import { Center, Image, useMediaQuery } from '@chakra-ui/react';

const ProductImageContainer = ({ product }) => {
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");
  return (
    <Center
      bgColor="white"
      boxShadow="lg"
      w={isLessThan850 ? "100%" : "40%"}
      h={isLessThan850 ? "auto" : "100vh"}
    >
      <Image src={product.imageUrl} w="65%" alt={product.name} />
    </Center>
  );
}

export default ProductImageContainer;