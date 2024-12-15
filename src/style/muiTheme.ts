import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80, // 기본 높이 지정
          minHeight: 80, // Breakpoint에 따라 자동 조정되는 min-height
        },
      },
    },
  },
});
