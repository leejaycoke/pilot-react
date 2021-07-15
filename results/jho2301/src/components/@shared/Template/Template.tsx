import { StyledTemplate } from './Template.styles';

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return <StyledTemplate>{children}</StyledTemplate>;
};

export default Template;
