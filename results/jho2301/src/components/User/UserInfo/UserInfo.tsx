import { LogoutButton, StyledUserInfo, UserInfoText, UserInfoTitle } from './UserInfo.styles';
import useUser from '../../../service/hooks/useUser';

const UserInfo = () => {
  const { userInfo } = useUser();

  return (
    <StyledUserInfo>
      <UserInfoTitle>회원 정보</UserInfoTitle>
      <UserInfoText>이름: {userInfo.name}</UserInfoText>
      <UserInfoText>레벨: {userInfo.level}</UserInfoText>
      <LogoutButton>로그아웃</LogoutButton>
    </StyledUserInfo>
  );
};

export default UserInfo;
