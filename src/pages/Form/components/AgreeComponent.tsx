import { Box, Checkbox, FormControlLabel, SelectChangeEvent, Typography } from '@mui/material';
import DetailLink from './DetailLink';

interface AgreeComponentProps {
  name: string;
  checked: boolean;
  content: string;
  href: string;
  handleFormData: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => void;
}

const AgreeComponent = ({ name, checked, content, href, handleFormData }: AgreeComponentProps) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <FormControlLabel
        label={content}
        control={<Checkbox name={name} checked={checked} onChange={handleFormData} />}
      />
      <DetailLink href={href} />
    </Box>
  );
};

export default AgreeComponent;
