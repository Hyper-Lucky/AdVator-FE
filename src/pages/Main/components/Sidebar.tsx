import { Drawer, Toolbar, Tab, Tabs, AppBar, Divider, Stack, Box, Typography, Button, useTheme } from '@mui/material';
import CardSection from './CardSection';
import { useState } from 'react';
import FilterSection from './FilterSection';
import SortSelect from './SortSelect';
import { totalPrice } from 'src/utils/calc';
import { theme } from 'src/style/muiTheme';

const Sidebar = () => {
  const [tab, setTab] = useState(0);
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

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const drawerWidth = 360;
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'white' }}>
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="전체" {...a11yProps(0)} />
          <Tab label="내가 담은 단지" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      {tab === 0 && (
        <>
          <FilterSection />
          <Divider />
        </>
      )}

      <Stack height={tab === 0 ? '100%' : 565}>
        <Stack overflow={'scroll'}>
          {tab === 0 && <SortSelect />}
          <CardSection inCart={tab === 0 ? true : false} />
        </Stack>
      </Stack>
      <Divider />

      {tab === 1 && (
        <Box padding={2} height={80} display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight="bold" color="primary">
            예상 견적 금액
          </Typography>
          <Typography fontWeight="bold" variant="h6" color="primary">
            {totalPrice(aparts).toLocaleString()}원
          </Typography>
        </Box>
      )}

      <Stack
        sx={{ backgroundColor: theme.palette.primary.main, padding: '24px 22px' }}
        justifyContent={'center'}
        alignItems={'center'}
        alignSelf={'stretch'}
      >
        <Button sx={{ color: 'white' }}>
          <Typography variant="h6" fontWeight={'bold'} padding={0}>
            총 {aparts.length}개 15초 광고 견적 문의하기
          </Typography>
        </Button>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
