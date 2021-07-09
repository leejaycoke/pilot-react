import styled from 'styled-components';
import PALETTE from '../../../constants/palette';
import Button from '../../@shared/Button/Button';
import Input from '../../@shared/Input/Input';

export const StyledUserInfo = styled.section`
  width: 26rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  border: 1px solid ${PALETTE.GRAY_200};
  align-items: center;
  border-radius: 1rem;
`;

export const UserInfoTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 2.25rem 0;
`;

export const UserInfoText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin: 1.5rem 0;
  align-self: flex-start;
`;

export const LogoutButton = styled(Button)`
  margin-top: 1rem;
`;
