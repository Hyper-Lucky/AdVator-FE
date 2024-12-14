import { AdvertisingRequest } from '@api/dto';
import { Box, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

interface FormSectionProps {
  formData: Omit<AdvertisingRequest, 'apart'>;
  handleFormData: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => void;
}

const FormSection = ({ formData, handleFormData }: FormSectionProps) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Box sx={{ width: '100%' }}>
        <Typography fontWeight="semibold">업체명</Typography>
        <TextField
          name="store"
          variant="outlined"
          label="업체명"
          sx={{ width: '100%' }}
          value={formData.store}
          onChange={handleFormData}
        />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="semibold">업종</Typography>
          <Select
            name="industry"
            variant="outlined"
            label="업종"
            sx={{ width: '100%' }}
            value={formData.industry}
            onChange={handleFormData}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="semibold">사업 유형</Typography>
          <Select
            name="business"
            variant="outlined"
            label="사업 유형"
            sx={{ width: '100%' }}
            value={formData.business}
            onChange={handleFormData}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="semibold">광고 진행 기간</Typography>
          <Select
            name="period"
            variant="outlined"
            label="광고 진행 기간"
            sx={{ width: '100%' }}
            value={formData.period}
            onChange={handleFormData}
          />
        </Box>
        {/* <DatePicker /> */}
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography fontWeight="semibold">기타 요청/문의사항</Typography>
        <TextField
          name="description"
          variant="outlined"
          label="기타 요청/문의사항"
          multiline
          rows={4}
          sx={{ width: '100%' }}
          value={formData.description}
          onChange={handleFormData}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography fontWeight="semibold">작성자 이름</Typography>
        <TextField
          name="author"
          variant="outlined"
          label="작성자 이름"
          sx={{ width: '100%' }}
          value={formData.author}
          onChange={handleFormData}
        />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="semibold">연락처</Typography>
          <TextField
            name="phone"
            variant="outlined"
            label="연락처"
            sx={{ width: '100%' }}
            value={formData.phone}
            onChange={handleFormData}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="semibold">이메일 주소</Typography>
          <TextField
            name="email"
            variant="outlined"
            label="이메일 주소"
            sx={{ width: '100%' }}
            value={formData.email}
            onChange={handleFormData}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FormSection;
