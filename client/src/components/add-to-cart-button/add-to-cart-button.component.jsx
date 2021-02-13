import { Button, Text } from '@chakra-ui/react';
import { withRouter } from 'react-router-dom';
import { addToBasket } from '../../redux/basket/basket.actions';
import { changeQuantity } from '../../redux/products/products.actions';
import { buttonProps } from './add-to-cart-button.props';
import { useDispatch, useSelector } from 'react-redux';

const AddToCardButton = ({ product, history }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.products.quantity);

  return (
    <Button
      {...buttonProps}
      onClick={() => {
        dispatch(addToBasket({ ...product, quantity }));
        dispatch(changeQuantity("1"));
        history.push('/basket')
      }}
    >
      <Text fontSize="xs">
        ADD TO CART
      </Text>
    </Button>
  );
}

export default withRouter(AddToCardButton);