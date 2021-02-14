import { Box, Flex, Spacer, Image } from '@chakra-ui/react';
import { VscSignIn } from 'react-icons/vsc';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBasket } from 'react-icons/bi';
import LeftMenuItem from '../left-menu-item/left-menu-item.component';
import {
  containerProps,
  logoProps,
  iconProps
} from './left-menu.props';
import { Link, withRouter } from 'react-router-dom';

const LeftMenu = ({ history, children }) => {
  return (
    <>
      <Box {...containerProps}>
        <Flex direction="column" align="center" h="100%">
          <Link to="/">
            <Image {...logoProps} />
          </Link>
          <Flex mt="4.5rem" h="9rem" direction="column">
            <LeftMenuItem
              to="/"
              icon={AiOutlineHome}
              color={history.location.pathname !== '/' ? "#c1c1c1" : "#3182ce"}
              { ...iconProps }
            />
            <Spacer />
            <LeftMenuItem
              to="/basket"
              as={BiBasket}
              color={history.location.pathname !== '/basket' ? "#c1c1c1" : "#3182ce"}
              { ...iconProps }
            />
            <Spacer />
            <LeftMenuItem
              to="/search"
              as={AiOutlineSearch}
              color={history.location.pathname !== '/search' ? "#c1c1c1" : "#3182ce"}
              { ...iconProps }
            />
          </Flex>
          <Spacer />
          <LeftMenuItem
            to="/signin"
            as={VscSignIn}
            mb="2rem"
            color={history.location.pathname !== '/signin' ? "#c1c1c1" : "#3182ce"}
            { ...iconProps }
          />
        </Flex>
      </Box>
      { children }
    </>
  );
}

export default withRouter(LeftMenu);