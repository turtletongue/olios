import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../../redux/basket/basket.actions';

const StripeButton = ({ price, history }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I1stlJeVfJJ7K9IfCyNNgvQ8j3tmjJrcFZZLYpwaIIy3ST8Fbw6B9GIMJpfuzyXUY2iwU4DNnn424XcBFKUhkZ0003GYx4lrA';
  const onToken = () => {
    dispatch(clearBasket());
    history.push('/');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Olios'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/XXWpn1M/LOGO.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >

    </StripeCheckout>
  );
}

export default withRouter(StripeButton);