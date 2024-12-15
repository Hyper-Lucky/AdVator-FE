import Sidebar from './components/Sidebar';
import BasicMap from '@components/Map';
import { useEffect, useState } from 'react';
import { LatLng, SearchOptions } from '@api/dto';
import { Stack } from '@mui/material';
import { useApartmentSearchByAddressMutation } from '@api/api';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { apartSearchState } from '@recoil/apartSearchState';
import useKakaoLoader from 'src/hooks/useKakaoLoader';
import { getAddressToGps } from 'src/utils/getAdressToGps';

const Main = () => {
  const [center, setCenter] = useState<LatLng>({ lat: 37.4856994479252, lng: 127.069984716026 });
  /* const defaultCity = {
    city: '서울특별시',
    district: '양천구',
    area: '신정동',
  }; */
  const defaultCity = {
    city: '서울특별시',
    district: '강서구',
    area: '화곡동',
  };

  const [selectedCity, setSelectedCity] = useState(defaultCity.city);
  const [selectedDistrict, setSelectedDistrict] = useState(defaultCity.district);
  const [selectedArea, setSelectedArea] = useState(defaultCity.area);

  const [selectedRatings, setSelectedRatings] = useState<string[]>([]); // 여러 선택 가능
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]); // 여러 선택 가능

  const [sort, setSort] = useState<'low' | 'high' | undefined>('low');

  const [apart, setApartSearch] = useRecoilState(apartSearchState);

  const { mutate: apartSearchByAddress } = useApartmentSearchByAddressMutation();

  const getApartData = () => {
    getAddressToGps({ selectedCity, selectedDistrict, selectedArea, setGps: setCenter });
    setApartData();
  };
  const setApartData = () => {
    apartSearchByAddress(
      {
        city: selectedCity,
        district: selectedDistrict,
        area: selectedArea,
        sort,
        rating: selectedRatings,
        company: selectedCompanies,
      },
      {
        onSuccess: ({ data }) => {
          setApartSearch(data);
        },
      },
    );
  };

  useEffect(() => {
    setApartData();
  }, [selectedRatings, selectedCompanies, sort]);

  useEffect(() => {
    getAddressToGps({
      selectedCity: defaultCity.city,
      selectedDistrict: defaultCity.district,
      selectedArea: defaultCity.area,
      setCenter,
    });
  }, []);

  return (
    <Stack
      sx={{
        width: '100%', // 부모 요소의 너비를 채움
        height: '100%', // 부모 요소의 높이를 채움
      }}
    >
      <BasicMap
        center={center}
        apart={apart}
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
      <Sidebar
        requestData={{ selectedRatings, setSelectedRatings, selectedCompanies, setSelectedCompanies, sort, setSort }}
        apart={apart}
      />
    </Stack>
  );
};

export default Main;
