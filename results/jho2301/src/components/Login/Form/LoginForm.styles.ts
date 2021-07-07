import styled from 'styled-components';
import PALETTE from '../../../constants/palette';
import Input from '../../@shared/Input/Input';

export const StyledLoginForm = styled.form`
  width: 26rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  border: 1px solid ${PALETTE.GRAY_200};
  align-items: center;
  border-radius: 1rem;
`;

export const LoginTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 2.25rem 0;
`;

export const LoginInput = styled(Input)`
  margin-bottom: 2rem;
`;
