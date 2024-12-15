import { Apart } from '@api/dto';
import { Button, CardContent, IconButton, Card as MuiCard, Stack, Typography } from '@mui/material';
import { apartCartState } from '@recoil/apartCartState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import cartUrl from '@assets/Cart.svg';
import CheckIcon from '@mui/icons-material/Check';
import { ShoppingCart } from '@mui/icons-material';
import { ClearIcon } from '@mui/x-date-pickers';

interface CartProps {
  inCart: boolean;
  apart: Apart;
  currApart?: string;
}

const Card = ({ inCart, apart, currApart }: CartProps) => {
  const { apartName, unitPrice, tvCount, totalPrice, company, address, rating, request } = apart;

  const [cart, setCartState] = useRecoilState(apartCartState);

  const handleCart = () => {
    setCartState((prev) => [...prev, apart]);
  };

  return (
    <MuiCard
      sx={{
        border: 'none',
        boxShadow: 'none',
        overflow: 'visible',
      }}
      variant="outlined"
    >
      <CardContent sx={{ height: '100%' }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} alignItems={'center'} marginBottom={0.5}>
            <CheckIcon fontSize="small" color={'primary'} />
            <Typography variant="body1" color={'primary'}>
              {request}명의 사장님이 선택하신 곳이에요
            </Typography>
          </Stack>
          {inCart && currApart && (
            <IconButton
              onClick={() => {
                setCartState(cart.filter(({ apartName }) => apartName !== currApart));
              }}
            >
              <ClearIcon />
            </IconButton>
          )}
        </Stack>
        <Typography variant="h6">{apartName}</Typography>
        <Stack direction="row" spacing={1} alignItems={'center'}>
          <Typography variant="body1">{rating}등급</Typography>
          <Stack direction="row" alignItems={'end'} spacing={0.3}>
            <Typography fontWeight="bold" variant="h5">
              {unitPrice.toLocaleString()}원
            </Typography>
            <Typography variant="body2">/대</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.5} alignItems={'center'}>
            <Typography variant="subtitle2">총 대수</Typography>
            <Typography variant="body2">{tvCount}대</Typography>
          </Stack>
          <Typography variant="caption" color="gray">
            |
          </Typography>
          <Typography variant="subtitle2">{company}</Typography>
        </Stack>
        {/* 간격 처리 필요 */}
        <Typography marginY={0.5} variant="body2" color="text.secondary">
          {address}
        </Typography>

        <Stack marginTop={3} direction={'row'} justifyContent={'end'} alignItems={'center'} spacing={1}>
          <Typography variant="h5" fontWeight="bold" color="primary">
            {totalPrice.toLocaleString()}원
          </Typography>
          {!inCart && (
            <Button
              size="small"
              variant="outlined"
              onClick={handleCart}
              disabled={cart.find(({ apartName }) => apartName === currApart) ? true : false}
            >
              <ShoppingCart />
            </Button>
          )}
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
