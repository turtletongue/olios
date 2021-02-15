import { Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LeftMenuItem = ({ to, icon, ...otherProps }) => {
  return (
    <>
      {
        to ? (
          <Link to={to}>
            <Icon as={icon} {...otherProps} />
          </Link>
        ) : (
          <Icon as={icon} {...otherProps} />
        )
      }
    </>
  );
}

export default LeftMenuItem;