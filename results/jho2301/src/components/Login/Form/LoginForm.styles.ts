import styled from 'styled-components';
import PALETTE from '../../../constants/palette';
import Input from '../../@shared/Input/Input';

export const StyledLoginForm = styled.form`
  width: 26rem;
  display: flex;
  flex-direction: column;
  padding: 2.25rem 3rem 2rem;
  border: 1px solid ${PALETTE.GRAY_200};
  align-items: center;
  border-radius: 1rem;
`;

export const LoginTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2.25rem;
`;

export const LoginInput = styled(Input)`
  margin-bottom: 2rem;

  & + & {
    margin-bottom: 1rem;
  }
`;

export const MemoryCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 2rem;
  font-size: 0.75rem;
`;
