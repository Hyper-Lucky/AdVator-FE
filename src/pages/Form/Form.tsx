import { LocalizationProvider } from '@mui/x-date-pickers';
import FormSection from './components/FormSection';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box } from '@mui/material';

const Form = () => {
  return (
    <Box sx={{ height: '100%', marginTop: 8 }}>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <FormSection />
      {/* </LocalizationProvider> */}
    </Box>
  );
};

export default Form;
