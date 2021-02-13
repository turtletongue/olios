import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LeftMenuItem = ({ to, ...otherProps }) => {
  return (
    <Link to={to}>
      <Image {...otherProps} />
    </Link>
  );
}

export default LeftMenuItem;