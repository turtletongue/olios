import {
  Flex,
  Text,
  Button,
  useMediaQuery
} from '@chakra-ui/react';
import { withRouter } from 'react-router-dom';
import FullscreenBackgroundImage from '../../components/fullscreen-background-image/fullscreen-background-image.component';
import { backgroundTextProps, textProps, buttonProps } from './homepage.props';

const Homepage = ({ history }) => {
  const [isLargerThan1064] = useMediaQuery("(min-width: 1064px)");
  const [isLargerThan340] = useMediaQuery("(min-width: 340px)");
  return (
    <>
      <FullscreenBackgroundImage
        imageUrl='https://i.ibb.co/JHFs68F/main-photo-background.png'
      >
        <Flex direction="column" align="center">
          { isLargerThan1064 ? 
            <Text {...backgroundTextProps}>NEWEST</Text>
            :
            <></>
          }
          <Flex direction="column" align="center" zIndex="1" ml="3.5rem">
            <Text
              mt="3.5rem"
              fontSize={ isLargerThan340 ? "8xl" : "7xl"}
              { ...textProps }
            >
              OLIOS
            </Text>
            <Text
              fontSize={ isLargerThan340 ? "xl" : "md"}
              { ...textProps }
            >
              NEWEST FURNITURE SHOP
            </Text>
            <Button
              onClick={() => history.push('/search')}
              { ...textProps }
              { ...buttonProps }
            >
              VIEW MORE
            </Button>
          </Flex>
        </Flex>
      </FullscreenBackgroundImage>
    </>
  );
}

export default withRouter(Homepage);