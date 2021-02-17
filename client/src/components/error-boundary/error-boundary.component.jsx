import { Component } from 'react';
import { Center, Text, Image, Box } from '@chakra-ui/react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center h="100vh">
          <Box h="95%">
            <Text fontSize="3xl" textAlign="center">Something went wrong.</Text>
            <Image src="https://error404.fun/img/full-preview/1x/19.png" maxH="90%" />
          </Box>
        </Center>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;