import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const FilterSection = ({}) => {
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const ratings = ['S+', 'S', 'A+', 'A'];
  const companies = ['포커스미디어', 'KT타운보드', '미디어믿'];

  return (
    <Box sx={{ padding: 2 }}>
      {/* 등급 섹션 */}
      <Stack direction="row" spacing={1} alignItems="center" mb={1}>
        <Typography variant="body1" fontWeight="bold">
          등급
        </Typography>
        {ratings.map((rating) => (
          <Chip
            size="small"
            key={rating}
            label={rating}
            onClick={() => setSelectedRating(rating === selectedRating ? null : rating)}
            clickable
            variant={rating === selectedRating ? 'filled' : 'outlined'} // 선택 상태 스타일
            color={rating === selectedRating ? 'primary' : 'default'} // 선택된 경우 색상 변경
          />
        ))}
      </Stack>

      {/* 업체 섹션 */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body1" fontWeight="bold">
          업체
        </Typography>
        {companies.map((company) => (
          <Chip
            size="small"
            key={company}
            label={company}
            onClick={() => setSelectedCompany(company === selectedCompany ? null : company)}
            clickable
            variant={company === selectedCompany ? 'filled' : 'outlined'}
            color={company === selectedCompany ? 'primary' : 'default'}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FilterSection;
