import { Box, Select, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const FormSection = () => {
  return (
    <Box sx={{ width: '70%', display: 'flex', flexWrap: 'wrap', padding: 10, gap: '20px' }}>
      <TextField variant="outlined" label="업체명" sx={{ width: '100%' }} />
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Select variant="outlined" label="업종" sx={{ width: '100%' }} />
        <Select variant="outlined" label="사업 유형" sx={{ width: '100%' }} />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Select variant="outlined" label="광고 진행 기간" sx={{ width: '100%' }} />
        {/* <DatePicker /> */}
      </Box>
      <TextField variant="outlined" label="기타 요청/문의사항" multiline sx={{ width: '100%' }} />
      <TextField variant="outlined" label="작성자 이름" sx={{ width: '100%' }} />
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <TextField variant="outlined" label="연락처" sx={{ width: '100%' }} />
        <TextField variant="outlined" label="이메일 주소" sx={{ width: '100%' }} />
      </Box>
    </Box>
  );
};

export default FormSection;
