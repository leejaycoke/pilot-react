import { Button, ButtonProps } from "@material-ui/core";

export type MainButtonProps = ButtonProps & {
  label: string;
};

const MainButton = ({ label, ...rest }: MainButtonProps) => {
  return (
    <Button variant="contained" color="primary" {...rest}>
      {label}
    </Button>
  );
};

export default MainButton;
