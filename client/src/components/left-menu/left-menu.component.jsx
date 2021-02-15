import { Box, Flex, Spacer, Image } from '@chakra-ui/react';
import { VscSignIn } from 'react-icons/vsc';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBasket, BiLogOut } from 'react-icons/bi';
import { RiAdminLine } from 'react-icons/ri';
import LeftMenuItem from '../left-menu-item/left-menu-item.component';
import { containerProps, logoProps, iconProps } from './left-menu.props';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth.actions';

const LeftMenu = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLogged = useSelector(state => state.auth.isLogged);
  return (
    <>
      <Box {...containerProps}>
        <Flex direction="column" align="center" h="100%">
          <Link to="/">
            <Image {...logoProps} />
          </Link>
          <Flex mt="4.5rem" h={isLogged ? "12rem" : "9rem"} direction="column">
            <LeftMenuItem
              to="/"
              icon={AiOutlineHome}
              color={location.pathname !== '/' ? "#c1c1c1" : "#3182ce"}
              { ...iconProps }
            />
            <Spacer />
            <LeftMenuItem
              to="/basket"
              as={BiBasket}
              color={location.pathname !== '/basket' ? "#c1c1c1" : "#3182ce"}
              { ...iconProps }
            />
            <Spacer />
            <LeftMenuItem
              to="/search"
              as={AiOutlineSearch}
              color={location.pathname !== '/search' ? "#c1c1c1" : "#3182ce"}
              { ...iconProps }
            />
            {
              isLogged ? (
                <>
                  <Spacer />
                  <LeftMenuItem
                    to="/admin"
                    as={RiAdminLine}
                    color={location.pathname !== '/admin' ? "#c1c1c1" : "#3182ce"}
                    { ...iconProps }
                  />
                </>
              ) : (
                <></>
              )
            }
          </Flex>
          <Spacer />
          {
            !isLogged ? (
              <LeftMenuItem
                to="/signin"
                as={VscSignIn}
                mb="2rem"
                color={location.pathname !== '/signin' ? "#c1c1c1" : "#3182ce"}
                { ...iconProps }
              />
            ) : (
              <LeftMenuItem
                to={null}
                as={BiLogOut}
                mb="2rem"
                color="#c1c1c1"
                { ...iconProps }
                onClick={() => dispatch(logout())}
              />
            )
          }
        </Flex>
      </Box>
      { children }
    </>
  );
}

export default LeftMenu;