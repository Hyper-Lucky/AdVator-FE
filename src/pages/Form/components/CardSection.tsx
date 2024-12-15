import { Box, CardContent, Divider, Stack, Typography } from '@mui/material';
import Card from '../../../components/Card';
import { totalPrice } from 'src/utils/calc';
import { Apart } from '@api/dto';

interface CardSectionProps {
  inCart: boolean;
  aparts: Apart[];
}

const CardSection = ({ inCart, aparts }: CardSectionProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '400px',
        margin: '60px auto',
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* 상단 영역 */}
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <Typography fontWeight="bold" variant="h6">
          내가 선택한 단지
        </Typography>
        <Typography color="text.secondary">수량 {aparts.length}건</Typography>
      </Box>

      {/* 개별 카드 */}
      <Stack height={788}>
        <Stack divider={<Divider />} overflow={'scroll'} spacing={2} marginY={2}>
          {aparts.map((apart, index) => (
            <Card key={index} inCart={inCart} apart={apart} />
          ))}
        </Stack>
      </Stack>

      {/* 하단 총 견적 금액 */}
      <Divider />
      <Box height={80} display="flex" justifyContent="space-between" alignItems="center" color={'primary'}>
        <Typography fontWeight="bold">총 견적 금액</Typography>
        <Typography fontWeight="bold" variant="h6" color="primary">
          {totalPrice(aparts).toLocaleString()}원
        </Typography>
      </Box>
    </Box>
  );
};

export default CardSection;
