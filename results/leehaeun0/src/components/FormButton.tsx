import React from 'react';
import styled from 'styled-components';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  icon?: React.ReactNode | null;
}

function FormButton({ children, icon, ...rest }: FormButtonProps) {
  return (
    <StyledButton {...rest}>
      {children}
      {icon}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  color: white;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.main};

  div.MuiCircularProgress-root {
    margin-left: 8px;
    svg circle {
      color: white;
    }
  }
`;

export default FormButton;
