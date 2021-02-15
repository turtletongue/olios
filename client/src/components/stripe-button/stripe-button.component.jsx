import { useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../../redux/basket/basket.actions';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const toast = useToast();
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I1stlJeVfJJ7K9IfCyNNgvQ8j3tmjJrcFZZLYpwaIIy3ST8Fbw6B9GIMJpfuzyXUY2iwU4DNnn424XcBFKUhkZ0003GYx4lrA';
  const errorToast = {
    title: "An error occurred.",
    description: "Something went wrong in the processing of your payment...",
    status: "error",
    position: "bottom-left",
    isClosable: true
  };
  const onToken = token => {
    fetch('http://localhost:5000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        amount: priceForStripe
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          return toast(errorToast);
        }
        dispatch(clearBasket());
        history.push('/');
        toast({
          title: "Payment successful.",
          description: "The product will be delivered to the address you specified.",
          status: "success",
          position: "bottom-left",
          isClosable: true
        });
      })
      .catch(error => {
        console.log(error.message);
        toast(errorToast)
      });
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
    />
  );
}

export default StripeButton;