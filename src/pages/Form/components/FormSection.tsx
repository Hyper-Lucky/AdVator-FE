import { useGetDataQuery } from '@api/api';
import { AdvertisingRequest } from '@api/dto';
import { Box, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';

interface FormSectionProps {
  start: DateTime | null;
  formData: Omit<AdvertisingRequest, 'apart'>;
  handleFormData: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => void;
  handleStart: (newValue: DateTime | null) => void;
}

const FormSection = ({ start, formData, handleFormData, handleStart }: FormSectionProps) => {
  const { data } = useGetDataQuery();

  return (
    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="body1" marginBottom={1} fontWeight="semibold">
          업체명
        </Typography>
        <TextField
          name="store"
          variant="outlined"
          sx={{ width: '100%' }}
          value={formData.store}
          placeholder="업장/매장명을 입력해주세요."
          onChange={handleFormData}
        />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" marginBottom={1} fontWeight="semibold">
            업종
          </Typography>
          <Select
            name="industry"
            variant="outlined"
            sx={{ width: '100%' }}
            value={formData.industry}
            onChange={handleFormData}
            displayEmpty
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <Typography variant="body1" color="text.disabled">
                  업종을 선택해주세요.
                </Typography>
              )
            }
          >
            {data &&
              data.industry?.map((item: any) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" marginBottom={1} fontWeight="semibold">
            사업 유형
          </Typography>
          <Select
            name="business"
            variant="outlined"
            sx={{ width: '100%' }}
            value={formData.business}
            onChange={handleFormData}
            displayEmpty
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <Typography variant="body1" color="text.disabled">
                  사업유형을 선택해주세요.
                </Typography>
              )
            }
          >
            {data &&
              data.business?.map((item: any) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" marginBottom={1} fontWeight="semibold">
            광고 진행 기간
          </Typography>
          <Select
            name="period"
            variant="outlined"
            sx={{ width: '100%' }}
            value={formData.period}
            onChange={handleFormData}
            displayEmpty
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <Typography variant="body1" color="text.disabled">
                  광고진행 기간을 선택해주세요.
                </Typography>
              )
            }
          >
            {data &&
              data.period?.map((item: any) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" marginBottom={1} fontWeight="semibold">
            광고 진행 시점
          </Typography>
          <DatePicker
            value={start || null} // 현재 날짜 값 설정
            onChange={(newValue) => handleStart(newValue)} // DatePicker의 값 처리
            sx={{ width: '100%' }}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography variant="body1" marginBottom={1} fontWeight="semibold">
          기타 요청/문의사항
        </Typography>
        <TextField
          name="description"
          variant="outlined"
          multiline
          rows={4}
          sx={{ width: '100%' }}
          value={formData.description}
          placeholder="자세히 입력해주시면 더 정확한 답변을 받으실 수 있습니다."
          onChange={handleFormData}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography variant="body1" marginBottom={1} fontWeight="semibold">
          작성자 이름
        </Typography>
        <TextField
          name="author"
          variant="outlined"
          sx={{ width: '100%' }}
          value={formData.author}
          placeholder="업장/매장명을 입력해주세요."
          onChange={handleFormData}
        />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', gap: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" marginBottom={1} fontWeight="semibold">
            연락처
          </Typography>
          <TextField
            name="phone"
            variant="outlined"
            sx={{ width: '100%' }}
            value={formData.phone}
            placeholder="010 - 1234 - 5678"
            onChange={handleFormData}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1" marginBottom={1} fontWeight="semibold">
            이메일 주소
          </Typography>
          <TextField
            name="email"
            variant="outlined"
            sx={{ width: '100%' }}
            value={formData.email}
            placeholder="helloadvator@gmail.com"
            onChange={handleFormData}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FormSection;
