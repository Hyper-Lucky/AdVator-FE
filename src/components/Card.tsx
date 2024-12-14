import { Apart } from '@api/dto';
import { Button, CardContent, Card as MuiCard, Stack, Typography } from '@mui/material';

interface CartProps {
  inCart: boolean;
  apart: Apart;
}

const Card = ({ inCart, apart }: CartProps) => {
  const { apartName, unitPrice, tvCount, totalPrice, company, address, rating, request } = apart;

  return (
    <MuiCard
      sx={{
        border: 'none',
        boxShadow: 'none',
        height: '204px',
      }}
      variant="outlined"
    >
      <CardContent sx={{ height: '100%' }}>
        <Typography fontWeight="bold" variant="subtitle1">
          {apartName}
        </Typography>
        <Stack direction="row" spacing={1} alignItems={'center'}>
          <Typography variant="body2">{rating}등급</Typography>
          <Stack direction="row" alignItems={'end'} spacing={0.3}>
            <Typography fontWeight="bold">{unitPrice.toLocaleString()}원</Typography>
            <Typography variant="body2">/대</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.5}>
            <Typography variant="caption">총 대수</Typography>
            <Typography variant="caption">{tvCount}대</Typography>
          </Stack>
          <Typography variant="caption" color="gray">
            |
          </Typography>
          <Typography variant="caption">{company}</Typography>
        </Stack>
        {/* 간격 처리 필요 */}
        <Typography variant="caption" color="text.secondary">
          {address}
        </Typography>

        <Stack direction={'row'} justifyContent={'end'} alignItems={'center'} spacing={1}>
          <Typography fontWeight="bold" color="primary">
            총 {totalPrice.toLocaleString()}원
          </Typography>
          {inCart && (
            <Button size="small" variant="contained">
              담기
            </Button>
          )}
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
