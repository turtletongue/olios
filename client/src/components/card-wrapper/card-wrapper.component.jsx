import Card from '../card/card.component';
import LargeCard from '../large-card/large-card.component';

const CardWrapper = ({ cols, mini, ...otherProps }) => {
  return (
    <>
      { +cols >= 2 && !mini ?
      <LargeCard cols={cols} {...otherProps} />
      :
      <Card cols={cols} {...otherProps} mini={mini} />
      }
    </>
  );
}

export default CardWrapper;