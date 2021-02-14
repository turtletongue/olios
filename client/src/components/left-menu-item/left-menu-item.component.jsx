import { Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LeftMenuItem = ({ to, icon, ...otherProps }) => {
  return (
    <Link to={to}>
      <Icon as={icon} {...otherProps} />
    </Link>
  );
}

export default LeftMenuItem;