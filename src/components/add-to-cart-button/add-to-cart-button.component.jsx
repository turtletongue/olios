import { Button, Text } from '@chakra-ui/react';
import { withRouter, useParams } from 'react-router-dom';
import { addToBasket } from '../../redux/basket/basket.actions';
import { changeQuantity } from '../../redux/product/product.actions';
import { buttonProps } from './add-to-cart-button.props';
import { useDispatch, useSelector } from 'react-redux';

const AddToCardButton = ({ history }) => {
  const dispatch = useDispatch();
  const { categoryPath, productId } = useParams();
  const quantity = useSelector(state => state.product.quantity);
  const category = useSelector(state => 
      Object
        .values(state.categories.currentCategories)
        .find(category => category.pathName === categoryPath)
  );
  const product = category.products.find(product => product.id === productId);
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