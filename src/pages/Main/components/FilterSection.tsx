import { Box, Chip, Stack, Typography } from '@mui/material';

const FilterSection = ({
  requestData: { selectedRatings, selectedCompanies, setSelectedRatings, setSelectedCompanies },
}: any) => {
  const ratings = ['S+', 'S', 'A+', 'A'];
  const companies = ['포커스 미디어 코리아', 'KT 타운보드', '미디어 믿'];

  // 등급 선택 핸들러
  const handleRatingClick = (rating: string) => {
    setSelectedRatings((prev: any) =>
      prev.includes(rating) ? prev.filter((r: any) => r !== rating) : [...prev, rating],
    );
  };

  // 업체 선택 핸들러
  const handleCompanyClick = (company: string) => {
    setSelectedCompanies((prev: any) =>
      prev.includes(company) ? prev.filter((c: any) => c !== company) : [...prev, company],
    );
  };

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
            onClick={() => handleRatingClick(rating)}
            clickable
            variant={selectedRatings.includes(rating) ? 'filled' : 'outlined'} // 선택 상태 스타일
            color={selectedRatings.includes(rating) ? 'primary' : 'default'} // 선택된 경우 색상 변경
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
            onClick={() => handleCompanyClick(company)}
            clickable
            variant={selectedCompanies.includes(company) ? 'filled' : 'outlined'}
            color={selectedCompanies.includes(company) ? 'primary' : 'default'}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FilterSection;
