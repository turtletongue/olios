import { Text, useMediaQuery } from '@chakra-ui/react';

const TableTitle = ({ children }) => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Text
      textAlign="center"
      fontFamily="Lato"
      fontSize={isLessThan800 ? "sm" : "xl"}
      w={isLessThan800 ? "25%" : "15%"}
    >{ children }</Text>
  );
};

export default TableTitle;