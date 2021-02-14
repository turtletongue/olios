import { Center, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Center bgColor="#f1f1f1" h="100vh">
      <Center bgColor="white" h="60%" w="45%" borderRadius="25px">
        <Box w="70%">
          <FormControl id="email" mb="1rem">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" mb="1rem">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button
            colorScheme="blue"
            w="100%"
            onClick={() => {}} //Sign In function
          >
            Sign In
          </Button>
        </Box>
      </Center>
    </Center>
  );
}

export default SignIn;