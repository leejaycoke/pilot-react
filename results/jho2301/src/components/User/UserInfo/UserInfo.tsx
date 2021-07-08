import { LogoutButton, StyledUserInfo, UserInfoText, UserInfoTitle } from './UserInfo.styles';

const UserInfo = () => {
  return (
    <StyledUserInfo>
      <UserInfoTitle>회원 정보</UserInfoTitle>
      <UserInfoText>이름: {'hi'}</UserInfoText>
      <UserInfoText>레벨: {'12'}</UserInfoText>
      <LogoutButton>로그아웃</LogoutButton>
    </StyledUserInfo>
  );
};

export default UserInfo;
