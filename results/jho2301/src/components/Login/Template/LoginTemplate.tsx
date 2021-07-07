import { StyledLoginTemplate } from './LoginTemplate.styles';

interface LoginTemplateProps {
  children: React.ReactNode;
}

const LoginTemplate = ({ children }: LoginTemplateProps) => {
  return <StyledLoginTemplate>{children}</StyledLoginTemplate>;
};

export default LoginTemplate;
