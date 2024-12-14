import Sidebar from './components/Sidebar';
import BasicMap from '@components/Map';
import { useState } from 'react';
import { LatLng } from '@api/dto';
import { Stack } from '@mui/material';

const Main = () => {
  const [center, setState] = useState<LatLng>({
    // 지도의 초기 위치
    lat: 33.450701,
    lng: 126.570667,
  });

  return (
    <Stack
      sx={{
        width: '100%', // 부모 요소의 너비를 채움
        height: '100%', // 부모 요소의 높이를 채움
      }}
    >
      <BasicMap center={center} />
      <Sidebar />
    </Stack>
  );
};

export default Main;
