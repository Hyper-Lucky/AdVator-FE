import { Box, SelectChangeEvent } from '@mui/material';
import AgreeComponent from './AgreeComponent';
import { AdvertisingRequest } from '@api/dto';

interface AgreeSectionProps {
  formData: Omit<AdvertisingRequest, 'apart'>;
  handleFormData: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => void;
}

const AgreeSection = ({ formData, handleFormData }: AgreeSectionProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <AgreeComponent
        name="personalAgree"
        checked={formData.personalAgree}
        content="개인 정보 수집/이용 동의"
        href=""
        handleFormData={handleFormData}
      />
      <AgreeComponent
        name="marketingAgree"
        checked={formData.marketingAgree}
        content="마케팅 정보 수신 동의"
        href=""
        handleFormData={handleFormData}
      />
    </Box>
  );
};

export default AgreeSection;
