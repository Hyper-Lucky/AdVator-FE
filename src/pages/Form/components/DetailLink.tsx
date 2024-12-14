import { Link, Typography, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface DetailLinkProps {
  href: string;
}

const DetailLink = ({ href }: DetailLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Typography>자세히 보기</Typography>
      <IconButton
        size="small"
        sx={{ padding: 0, marginLeft: 0.5, color: 'inherit' }} // 아이콘과 텍스트 간격 조정
      >
        <OpenInNewIcon fontSize="small" />
      </IconButton>
    </Link>
  );
};

export default DetailLink;
