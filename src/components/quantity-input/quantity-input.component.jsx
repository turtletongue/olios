import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../../redux/product/product.actions';
import { numberInputProps } from './quantity-input.props';

const QuantityInput = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.product.quantity);
  return (
    <NumberInput
      {...numberInputProps}
      onChange={(value) => dispatch(changeQuantity(value))}
    >
      <NumberInputField id="quantityField" value={quantity} />
      <NumberInputStepper>
        <NumberIncrementStepper h="1rem" />
        <NumberDecrementStepper h="1rem" />
      </NumberInputStepper>
    </NumberInput>
  );
}

export default QuantityInput;