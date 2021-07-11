import styled from 'styled-components';
import { Button } from 'antd';

const CommonButton = styled(Button)`
  background-color: #409eff;
  color: #fff;
  width: 150px;
  text-align: center;
  margin: 0 auto;
`;

const CommonBtn = ({children, onClick, type, style}: any) => {
  return <CommonButton style={style} type={type} onClick={onClick}>{children}</CommonButton>
};

export default CommonBtn;

