import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  /* TODO - pageparam 처리 필요 */
  const pageparam: 'full' | 'split' | null = 'full';
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white' }}>
      <Toolbar sx={{ display: 'flex', color: 'black' }}>
        로고 들어갈 예정
        <Typography variant="h6" noWrap component="div" sx={{ justifyItems: 'center' }}>
          {pageparam === 'full' ? '15초 광고 견적 문의하기' : pageparam === 'split' ? '5초 광고 견적 문의하기' : null}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
