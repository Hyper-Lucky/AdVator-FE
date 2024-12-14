import { Drawer, Toolbar, Tab, Tabs, AppBar, Divider, Stack } from '@mui/material';
import CardSection from './CardSection';
import { useState } from 'react';
import FilterSection from './FilterSection';
import SortSelect from './SortSelect';

const drawerWidth = 360;
const Sidebar = () => {
  const [tab, setTab] = useState(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
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
      <Toolbar />
      <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'white' }}>
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="전체" {...a11yProps(0)} />
          <Tab label="내가 담은 단지" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <FilterSection />
      <Divider />

      <Stack height={'100%'}>
        <Stack overflow={'scroll'}>
          <SortSelect />
          <CardSection inCart={tab === 0 ? true : false} />
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
