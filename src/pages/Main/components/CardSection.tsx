import { Apart } from '@api/dto';
import Card from '@components/Card';
import { Stack, Divider } from '@mui/material';
import { apartCartState } from '@recoil/apartCartState';
import { useRecoilValue } from 'recoil';

interface CardSectionProps {
  inCart: boolean;
  aparts: Apart[];
}

const CardSection = ({ inCart, aparts }: CardSectionProps) => {
  const cartAparts = useRecoilValue(apartCartState);

  return (
    <Stack divider={<Divider />}>
      {inCart
        ? cartAparts.map((apart, index) => (
            <Card key={apart.apartName} currApart={apart.apartName} inCart={inCart} apart={apart} />
          ))
        : aparts?.map((apart, index) => (
            <Card key={apart.apartName} currApart={apart.apartName} inCart={inCart} apart={apart} />
          ))}
      <Stack justifyContent={'center'} alignItems={'center'} paddingTop={50}>
        {inCart && cartAparts.length === 0 ? '담은 상품이 없어요' : null}
        {!inCart && cartAparts.length === 0 ? '담은 상품이 없어요' : null}
      </Stack>
    </Stack>
  );
};

export default CardSection;
