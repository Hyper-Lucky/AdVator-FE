import { LatLng } from '@api/dto';
import { Stack } from '@mui/material';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from 'src/hooks/useKakaoLoader';

export default function BasicMap({ center }: { center: LatLng }) {
  useKakaoLoader();
  // const breadcrumbs = [
  //   <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
  //     MUI
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="2"
  //     color="inherit"
  //     href="/material-ui/getting-started/installation/"
  //     onClick={handleClick}
  //   >
  //     Core
  //   </Link>,
  //   <Typography key="3" sx={{ color: 'text.primary' }}>
  //     Breadcrumb
  //   </Typography>,
  // ];

  /* const geocoder = new kakao.maps.services.Geocoder();
  geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', () => {}); */
  const apart = [
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
    <Stack
      sx={{
        width: '100%', // 부모 요소의 너비를 채움
        height: '100%', // 부모 요소의 높이를 채움
      }}
    >
      {/* <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs> */}
      <Map // 지도를 표시할 Container
        id="map"
        center={center}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={4} // 지도의 확대 레벨
        zoomable={false}
      />
    </Stack>
  );
}
