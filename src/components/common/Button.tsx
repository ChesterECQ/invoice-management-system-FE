import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface StyledButtonProps extends ButtonProps {
  bgcolor: string;
}

const StyledButton = styled(Button)<StyledButtonProps>(({ theme, bgcolor }) => ({
  textTransform: 'none',
  whiteSpace: 'nowrap',
  height: 30,
  backgroundColor: bgcolor,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface Props extends StyledButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton = ({ onClick, children, bgcolor, ...rest }: Props) => {
  return (
    <StyledButton onClick={onClick} bgcolor={bgcolor} {...rest}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
