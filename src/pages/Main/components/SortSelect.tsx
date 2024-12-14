import { useState } from 'react';
import { Box, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';

const SortSelect = () => {
  const [sortOption, setSortOption] = useState('low'); // 초기 값 설정

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value); // string 타입으로 사용 가능
  };

  return (
    <Stack direction={'row'} justifyContent={'end'}>
      <Select
        value={sortOption}
        onChange={handleChange}
        displayEmpty
        variant="standard"
        sx={{
          width: 100,
          fontSize: '14px',
          fontWeight: 'bold',
          '& .MuiSelect-icon': {
            marginRight: '-8px', // 화살표 위치 조정
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
