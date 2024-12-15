/* eslint-disable */

import { useEffect, useState } from 'react';
import { Breadcrumbs, Link, Typography, Box, Menu, MenuItem, Toolbar, Stack } from '@mui/material';
import { useGetDataQuery } from '@api/api';
import pinUrl from '@assets/LocationOnFilled.svg';
import { ChevronRight } from '@mui/icons-material';

const LocationSelector = ({
  data: {
    selectedCity,
    setSelectedCity,
    selectedDistrict,
    setSelectedDistrict,
    selectedArea,
    setSelectedArea,
    getApartData,
  },
}: {
  data: any;
}) => {
  const [menuAnchor, setMenuAnchor] = useState(null); // For dropdown menu
  const [menuOptions, setMenuOptions] = useState([]); // Options for the menu
  const [menuLevel, setMenuLevel] = useState(''); // Current menu level ("city", "district", "area")

  const { data } = useGetDataQuery();

  const transformedData = data
    ? {
        city: data.city.map((city: any) => ({
          name: city.city, // 기존 `city`를 `name`으로 변환
          district: city.districtList.map((district: any) => ({
            name: district.district, // 기존 `district`를 `name`으로 변환
            area: district.area, // `area`는 그대로 유지
          })),
        })),
      }
    : null;

  const handleBreadcrumbClick = (level: any, options: any) => (event: any) => {
    setMenuLevel(level);
    setMenuOptions(options);
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = (option: any) => {
    if (menuLevel === 'city') {
      setSelectedCity(option);
      setSelectedDistrict(null);
      setSelectedArea(null);
    } else if (menuLevel === 'district') {
      setSelectedDistrict(option);
      setSelectedArea(null);
    } else if (menuLevel === 'area') {
      setSelectedArea(option);
    }
    setMenuAnchor(null);
  };

  useEffect(() => {
    if (!selectedArea) return;

    getApartData();
  }, [selectedArea]);

  useEffect(() => {
    getApartData();
  }, []);

  // Options for each level
  const cityOptions = transformedData?.city.map((c: any) => c.name);
  const districtOptions =
    selectedCity && transformedData?.city.find((c: any) => c.name === selectedCity)?.district.map((d: any) => d.name);
  const areaOptions =
    selectedDistrict &&
    transformedData?.city
      .find((c: any) => c.name === selectedCity)
      ?.district.find((d: any) => d.name === selectedDistrict)?.area;

  return (
    <Box
      sx={{
        padding: 2,
        position: 'absolute', // 절대 위치 지정
        top: '16px', // 상단 여백
        left: '50%', // 수평 중앙 정렬
        transform: 'translateX(-100%)', // 중앙 정렬 보정
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ height: 80, minHeight: 80 }} />

      {/* 선택된 값 출력 */}
      <Box
        sx={{
          display: 'flex',
          padding: '8px 24px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '30px',
          border: '1px solid var(--Foundation-Black-black-7, #8C8C8C)',
          backgroundColor: 'var(--white, #FFF)',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
          width: 250,
        }}
      >
        <Stack
          direction={'row'}
          marginX={1}
          fontSize={1}
          height={32}
          width={259}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img width={25} src={pinUrl} alt="pin" />
          <Breadcrumbs
            separator={<ChevronRight color="primary" fontSize="small" sx={{ marginX: -1 }} />}
            aria-label="breadcrumb"
          >
            {/* 시/도 선택 */}
            <Link
              underline="hover"
              color={selectedCity ? 'black' : 'text.primary'}
              onClick={handleBreadcrumbClick('city', cityOptions)}
            >
              {selectedCity || '시/도'}
            </Link>

            {/* 시/군/구 선택 */}
            <Link
              underline="hover"
              color={selectedDistrict ? 'black' : 'text.primary'}
              onClick={handleBreadcrumbClick('district', districtOptions)}
            >
              {selectedDistrict || '시/군/구'}
            </Link>

            {/* 읍/면/동 선택 */}
            <Typography
              color={selectedArea ? 'black' : 'text.primary'}
              onClick={handleBreadcrumbClick('area', areaOptions)}
            >
              {selectedArea || '읍/면/동'}
            </Typography>
          </Breadcrumbs>
        </Stack>
        {/* <Typography variant="body1" marginX={2}>
          {`${selectedCity || '시/도'} > ${selectedDistrict || '시/군/구'} >`}
          {selectedArea || '읍/면/동'}
        </Typography> */}
      </Box>

      {/* Menu for dropdown options */}
      {/* 선택 여부에 따라 aria-hidden */}
      <Menu aria-hidden="false" anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
        {menuOptions &&
          menuOptions.map((option) => (
            <MenuItem aria-hidden="false" key={option} onClick={() => handleMenuClose(option)}>
              {option}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default LocationSelector;
