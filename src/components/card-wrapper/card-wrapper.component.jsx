import Card from '../card/card.component';
import LargeCard from '../large-card/large-card.component';

const CardWrapper = ({ cols, ...otherProps }) => {
  return (
    <>
      { +cols >= 2 ?
      <LargeCard cols={cols} {...otherProps} />
      :
      <Card cols={cols} {...otherProps} />
      }
    </>
  );
}

export default CardWrapper;