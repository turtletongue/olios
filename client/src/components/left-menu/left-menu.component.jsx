import { Box, Flex, Spacer } from '@chakra-ui/react';
import LeftMenuItem from '../left-menu-item/left-menu-item.component';
import {
  containerProps,
  logoProps,
  homeIconProps,
  basketIconProps,
  searchIconProps
} from './left-menu.props';

const LeftMenu = ({ children }) => {
  return (
    <>
      <Box {...containerProps}>
        <Flex direction="column" align="center">
          <LeftMenuItem to="/" {...logoProps} />
          <Flex mt="4.5rem" h="8rem" direction="column">
            <LeftMenuItem to="/" {...homeIconProps} />
            <Spacer />
            <LeftMenuItem to="/basket" {...basketIconProps} />
            <Spacer />
            <LeftMenuItem to="/search" {...searchIconProps} />
          </Flex>
        </Flex>
      </Box>
      { children }
    </>
  );
}

export default LeftMenu;