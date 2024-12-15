import {
  Drawer,
  Toolbar,
  Tab,
  Tabs,
  AppBar,
  Divider,
  Stack,
  Box,
  Typography,
  Button,
  useTheme,
  Link,
} from '@mui/material';
import CardSection from './CardSection';
import { useState } from 'react';
import FilterSection from './FilterSection';
import SortSelect from './SortSelect';
import { totalPrice } from 'src/utils/calc';
import { Apart } from '@api/dto';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { apartCartState } from '@recoil/apartCartState';

const Sidebar = ({ requestData, apart: aparts }: { requestData: any; apart: Apart[] }) => {
  const [tab, setTab] = useState(0);
  const drawerWidth = 360;
  const theme = useTheme();
  const navigate = useNavigate();
  const apartCart = useRecoilValue(apartCartState);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleSubmit = () => {
    navigate('/fullAd');
  };

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
      <Stack>
        <Toolbar />
      </Stack>
      <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'white' }}>
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="전체" {...a11yProps(0)} />
          <Tab label="견적 카트" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      {tab === 0 && (
        <>
          <FilterSection requestData={requestData} />
          <Divider />
        </>
      )}

      <Stack height={'100%'}>
        <Stack sx={{ overflowY: 'scroll', overflowX: 'hidden' }}>
          {tab === 0 && <SortSelect requestData={requestData} />}
          <CardSection inCart={tab === 1 ? true : false} aparts={aparts} />
        </Stack>
      </Stack>
      <Divider />

      {tab === 1 && (
        <Stack
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            borderTop: '1px solid #ddd',
            backgroundColor: 'white',
          }}
        >
          <Box padding={2} height={80} display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight="bold" color="primary">
              예상 견적 금액
            </Typography>
            <Typography fontWeight="bold" variant="h6" color="primary">
              {totalPrice(apartCart).toLocaleString()}원
            </Typography>
          </Box>

          <div onClick={handleSubmit}>
            <Button fullWidth sx={{ height: 72, borderRadius: 0 }} variant="contained" onClick={handleSubmit}>
              <Typography variant="h6">총 {apartCart.length}개 광고 견적 문의하기</Typography>
            </Button>
            {/* <Stack
              sx={{ backgroundColor: theme.palette.primary.main, padding: '24px 22px', color: 'white' }}
              justifyContent={'center'}
              alignItems={'center'}
              alignSelf={'stretch'}
            >
              <Typography variant="h6" fontWeight={'bold'} padding={0}>
                총 {apartCart.length}개 광고 견적 문의하기
              </Typography>
            </Stack> */}
          </div>
        </Stack>
      )}
    </Drawer>
  );
};

export default Sidebar;
