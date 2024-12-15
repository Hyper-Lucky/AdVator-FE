import { useState } from 'react';
import { Box, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const SortSelect = ({ requestData: { sort, setSort } }: { requestData: any }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSort(event.target.value); // string 타입으로 사용 가능
  };

  return (
    <Stack direction={'row'} justifyContent={'end'}>
      <Select
        value={sort}
        onChange={handleChange}
        displayEmpty
        variant="standard"
        IconComponent={UnfoldMoreIcon}
        sx={{
          width: 110,
          fontSize: '16px',
          margin: 1,
          fontWeight: 'bold',
          '&:before': {
            borderBottom: 'none',
          },
          '&:after': {
            borderBottom: 'none',
          },
          '&:hover': {
            borderBottom: 'none',
          },
        }}
      >
        <MenuItem value="low">가격 낮은 순</MenuItem>
        <MenuItem value="high">가격 높은 순</MenuItem>
      </Select>
    </Stack>
  );
};

export default SortSelect;
