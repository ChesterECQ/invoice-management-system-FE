import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material';

type CardProps = {
  noOutline?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ noOutline, backgroundColor, children }) => {
  return (
    <MuiCard
      variant={noOutline ? 'outlined' : 'elevation'}
      sx={{
        mt: 2,
        mb: 2,
        backgroundColor: backgroundColor ? backgroundColor : 'white',
        border: noOutline ? 'none' : '',
      }}
    >
      <MuiCardContent>{children}</MuiCardContent>
    </MuiCard>
  );
};

export default Card;