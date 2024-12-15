import { Apart, LatLng } from '@api/dto';
import { Stack } from '@mui/material';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from 'src/hooks/useKakaoLoader';
import LocationSelector from './LocationSelector';
import { useEffect, useState } from 'react';
import { useApartmentSearchByGpsMutation, useFullAdEstimateMutation } from '@api/api';
import { useSetRecoilState } from 'recoil';
import { apartSearchState } from '@recoil/apartSearchState';
import pinUrl from '@assets/Marker.svg';

export default function BasicMap({
  center,
  apart,
  data: {
    selectedCity,
    setSelectedCity,
    selectedDistrict,
    setSelectedDistrict,
    selectedArea,
    setSelectedArea,
    getApartData,
    sort,
    selectedRatings,
    selectedCompanies,
  },
}: {
  center: LatLng;
  apart: Apart[];
  data: any;
}) {
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

  const [markers, setMarkers] = useState([]);

  const { mutate: apartSearchByGps } = useApartmentSearchByGpsMutation();
  const setApart = useSetRecoilState(apartSearchState);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const newMarkers: any = [];

    apart?.forEach(({ address }, index) => {
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = {
            lat: parseFloat(result[0].y),
            lng: parseFloat(result[0].x),
            address, // 원본 주소를 함께 저장
          };
          newMarkers.push(coords);

          // 모든 주소가 처리된 후 상태 업데이트
          if (newMarkers.length === apart.length) {
            setMarkers(newMarkers);
          }
        } else {
          console.error(`주소(${address})에 대한 좌표 검색 실패: ${status}`);
        }
      });
    });
  }, [apart, selectedCity, selectedDistrict, selectedArea]);

  return (
    <Stack
      sx={{
        width: '100%', // 부모 요소의 너비를 채움
        height: '100%', // 부모 요소의 높이를 채움
        position: 'relative',
      }}
    >
      <LocationSelector
        data={{
          selectedCity,
          setSelectedCity,
          selectedDistrict,
          setSelectedDistrict,
          selectedArea,
          setSelectedArea,
          getApartData,
        }}
      />
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
        level={3} // 지도의 확대 레벨
        zoomable={false}
        onDragEnd={(map) => {
          const latlng = map.getCenter();

          apartSearchByGps(
            {
              gpsX: latlng.getLng(),
              gpsY: latlng.getLat(),
              sort,
              rating: selectedRatings,
              company: selectedCompanies,
            },
            {
              onSuccess: (data) => {
                setApart(data);
              },
            },
          );
        }}
      >
        {markers.map(({ lat, lng }) => {
          return (
            <MapMarker // 마커를 생성합니다
              key={`${lat}-${lng}`}
              position={{ lat, lng }}
              image={{
                src: pinUrl,
                size: {
                  width: 72,
                  height: 72,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 0,
                    y: 0,
                  }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                },
              }}
            />
          );
        })}
      </Map>
    </Stack>
  );
}
