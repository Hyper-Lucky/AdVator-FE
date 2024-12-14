import { LocalizationProvider } from '@mui/x-date-pickers';
import FormSection from './components/FormSection';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Button, SelectChangeEvent } from '@mui/material';
import AgreeSection from './components/AgreeSection';
import { useState } from 'react';
import { AdvertisingRequest } from '@api/dto';
import CardSection from './components/CardSection';

const Form = () => {
  const [formData, setFormData] = useState<Omit<AdvertisingRequest, 'apart'>>({
    store: '',
    industry: '',
    business: '',
    period: '',
    start: '',
    description: '',
    author: '',
    phone: '',
    email: '',
    personalAgree: false,
    marketingAgree: false,
  });

  const handleFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    // console.log(name, value, checked);
    if (!name) return;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value, // 체크박스는 `checked`, 다른 입력은 `value`
    }));
  };

  const handleSubmit = () => {
    /* 랜딩 페이지로 이동 */
  };

  return (
    <Box sx={{ height: '100%', marginTop: 8, display: 'flex' }}>
      <Box sx={{ width: '100%', padding: 10, display: 'flex', flexDirection: 'column' }}>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <FormSection formData={formData} handleFormData={handleFormData} />
        {/* </LocalizationProvider> */}
        <AgreeSection formData={formData} handleFormData={handleFormData} />
        <Button variant="contained" onClick={handleSubmit}>
          실 견적 문의하기
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
