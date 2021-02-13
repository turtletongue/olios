import { Circle } from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import { toggleHamburgerMenu } from '../../redux/burger-menu/burger-menu.actions';
import { useSelector, useDispatch } from 'react-redux';
import { circleProps, hamburgerProps } from './hamburger-circle.props';

const HamburgerCircle = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.burgerMenu.isOpen);
  return (
    <Circle {...circleProps} >
      <Hamburger
        toggled={isOpen}
        toggle={() => dispatch(toggleHamburgerMenu())}
        { ...hamburgerProps }
      />
    </Circle>
  );
}

export default HamburgerCircle;