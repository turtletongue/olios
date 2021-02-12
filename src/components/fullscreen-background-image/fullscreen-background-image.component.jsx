import { Box } from '@chakra-ui/react';

const FullscreenBackgroundImage = ({ imageUrl, children }) => {
  return (
    <Box
      h="100vh"
      bgImage={`url('${imageUrl}')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      { children }
    </Box>
  );
}

export default FullscreenBackgroundImage;