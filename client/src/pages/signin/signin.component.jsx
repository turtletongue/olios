import { Center, Box, FormControl, FormLabel, Input, Button, useMediaQuery } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changeEmailInput, changePasswordInput, startSignIn } from '../../redux/auth/auth.actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);
  const emailInput = useSelector(state => state.auth.emailInput);
  const passwordInput = useSelector(state => state.auth.passwordInput);
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");

  if (isLogged) {
    return <Redirect to="/" />
  }
  return (
    <Center bgColor="#f1f1f1" h="100vh">
      <Center
        bgColor="white"
        h="60%"
        w={isLessThan850 ? "75%" : "45%"}
        ml={isLessThan850 ? "3.5rem": "0"}
        borderRadius="25px"
      >
        <Box w="70%">
          <FormControl id="email" mb="1rem">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={emailInput}
              onChange={(event) => dispatch(changeEmailInput(event.target.value))}
            />
          </FormControl>
          <FormControl id="password" mb="1rem">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={passwordInput}
              onChange={(event) => dispatch(changePasswordInput(event.target.value))}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            w="100%"
            onClick={() => dispatch(startSignIn(emailInput, passwordInput))}
          >
            Sign In
          </Button>
        </Box>
      </Center>
    </Center>
  );
}

export default SignIn;