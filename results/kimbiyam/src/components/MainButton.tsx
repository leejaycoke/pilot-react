import { Button, ButtonProps, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    width: "120px",
  },
});

export type MainButtonProps = ButtonProps & {
  label: string;
};

const MainButton = ({ label, ...rest }: MainButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      {...rest}
    >
      {label}
    </Button>
  );
};

export default MainButton;
