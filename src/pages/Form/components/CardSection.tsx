import { Box, CardContent, Divider, Stack, Typography } from '@mui/material';
import Card from './Card';

interface CardSectionProps {
  inCart: boolean;
}

const CardSection = ({ inCart }: CardSectionProps) => {
  const aparts = [
    {
      apartName: '개포주공5단지', // 아파트명, String
      unitPrice: 7000, // 1대당 가격, Long
      tvCount: 2, // 총 대수, Long
      totalPrice: 14000, // 총 가격, Long
      company: '포커스 미디어 코리아', // 업체명, String
      address: '서울 강남구 개포동 187', // 주소, String
      rating: 'A', // 등급, String
      request: 10, // 견적 요청 수, Long
    },
    {
      apartName: '개포주공5단지', // 아파트명, String
      unitPrice: 7000, // 1대당 가격, Long
      tvCount: 2, // 총 대수, Long
      totalPrice: 14000, // 총 가격, Long
      company: '포커스 미디어 코리아', // 업체명, String
      address: '서울 강남구 개포동 187', // 주소, String
      rating: 'A', // 등급, String
      request: 10, // 견적 요청 수, Long
    },
    {
      apartName: '개포주공5단지', // 아파트명, String
      unitPrice: 7000, // 1대당 가격, Long
      tvCount: 2, // 총 대수, Long
      totalPrice: 14000, // 총 가격, Long
      company: '포커스 미디어 코리아', // 업체명, String
      address: '서울 강남구 개포동 187', // 주소, String
      rating: 'A', // 등급, String
      request: 10, // 견적 요청 수, Long
    },
    {
      apartName: '개포주공5단지', // 아파트명, String
      unitPrice: 7000, // 1대당 가격, Long
      tvCount: 2, // 총 대수, Long
      totalPrice: 14000, // 총 가격, Long
      company: '포커스 미디어 코리아', // 업체명, String
      address: '서울 강남구 개포동 187', // 주소, String
      rating: 'A', // 등급, String
      request: 10, // 견적 요청 수, Long
    },
    {
      apartName: '개포주공5단지', // 아파트명, String
      unitPrice: 7000, // 1대당 가격, Long
      tvCount: 2, // 총 대수, Long
      totalPrice: 14000, // 총 가격, Long
      company: '포커스 미디어 코리아', // 업체명, String
      address: '서울 강남구 개포동 187', // 주소, String
      rating: 'A', // 등급, String
      request: 10, // 견적 요청 수, Long
    },
    {
      apartName: '개포주공5단지', // 아파트명, String
      unitPrice: 7000, // 1대당 가격, Long
      tvCount: 2, // 총 대수, Long
      totalPrice: 14000, // 총 가격, Long
      company: '포커스 미디어 코리아', // 업체명, String
      address: '서울 강남구 개포동 187', // 주소, String
      rating: 'A', // 등급, String
      request: 10, // 견적 요청 수, Long
    },
    {
      apartName: '개포주공5단지', // 아파트명, String
      unitPrice: 7000, // 1대당 가격, Long
      tvCount: 2, // 총 대수, Long
      totalPrice: 14000, // 총 가격, Long
      company: '포커스 미디어 코리아', // 업체명, String
      address: '서울 강남구 개포동 187', // 주소, String
      rating: 'A', // 등급, String
      request: 10, // 견적 요청 수, Long
    },
  ];

  const totalEstimate = aparts.reduce((acc, item) => acc + item.unitPrice, 0);

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
      <Stack divider={<Divider />} overflow={'scroll'} height={'100%'} spacing={2} marginY={2}>
        {aparts.map((apart, index) => (
          <Card key={index} inCart={inCart} apart={apart} />
        ))}
      </Stack>

      {/* 하단 총 견적 금액 */}
      <Divider />
      <Box height={80} display="flex" justifyContent="space-between" alignItems="center" color={'primary'}>
        <Typography fontWeight="bold">총 견적 금액</Typography>
        <Typography fontWeight="bold" variant="h6" color="primary">
          {totalEstimate.toLocaleString()}원
        </Typography>
      </Box>
    </Box>
  );
};

export default CardSection;
