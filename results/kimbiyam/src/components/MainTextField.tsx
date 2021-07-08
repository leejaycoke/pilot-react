import { makeStyles, TextField, TextFieldProps } from "@material-ui/core";
import { memo } from "react";

const useStyles = makeStyles({
  input: {
    margin: "8px 0",
  },
});

export type MainTextFieldProps = TextFieldProps & {
  label: string;
};

const MainTextField = memo(({ label, ...rest }: MainTextFieldProps) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      label={label}
      variant="outlined"
      {...rest}
    />
  );
});

export default MainTextField;
