import Card from '@components/Card';
import { Stack, Divider } from '@mui/material';

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

  return (
    <div>
      <Stack divider={<Divider />} overflow={'scroll'} height={'100%'} spacing={2} marginY={2}>
        {aparts.map((apart, index) => (
          <Card key={index} inCart={inCart} apart={apart} />
        ))}
      </Stack>
    </div>
  );
};

export default CardSection;
