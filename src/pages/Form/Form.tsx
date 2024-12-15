import { LocalizationProvider } from '@mui/x-date-pickers';
import FormSection from './components/FormSection';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Button, SelectChangeEvent, Stack, Typography } from '@mui/material';
import AgreeSection from './components/AgreeSection';
import { useEffect, useState } from 'react';
import { AdvertisingRequest } from '@api/dto';
import CardSection from './components/CardSection';
import { useRecoilValue } from 'recoil';
import { apartCartState } from '@recoil/apartCartState';
import { useFullAdEstimateMutation } from '@api/api';
import { DateTime } from 'luxon';

const Form = () => {
  const [formData, setFormData] = useState<Omit<AdvertisingRequest, 'apart'>>({
    store: '',
    industry: '',
    business: '',
    period: '',
    description: '',
    author: '',
    phone: '',
    email: '',
    personalAgree: false,
  });

  const [start, setStart] = useState<DateTime | null>(null);

  const aparts = useRecoilValue(apartCartState);
  const { mutate: submit } = useFullAdEstimateMutation();

  const handleFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string> | null,
  ) => {
    if (!event) return;
    const { name, value, type, checked } = event.target as HTMLInputElement;
    // console.log(name, value, checked);
    if (!name) return;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value, // 체크박스는 `checked`, 다른 입력은 `value`
    }));
  };

  const handleSubmit = () => {
    submit(
      { apart: aparts, ...formData, start: start?.toISODate() || undefined },
      {
        onSuccess: (data) => {
          alert('견적 문의가 완료되었어요\n5영업일 이내에 이메일로 견적서를 보내드릴게요');
        },
      },
    );
  };

  return (
    <Stack direction="row" sx={{ padding: 10 }}>
      <CardSection inCart={true} aparts={aparts} />
      <Stack sx={{ width: '100%', padding: 10 }}>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <FormSection
            start={start}
            handleStart={(newValue) => {
              setStart(newValue);
            }}
            formData={formData}
            handleFormData={handleFormData}
          />
        </LocalizationProvider>
        <AgreeSection formData={formData} handleFormData={handleFormData} />
        <Button fullWidth sx={{ height: 72 }} variant="contained" onClick={handleSubmit}>
          <Typography variant="h6">실 견적 문의하기</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
