import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles({
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Input></Input>
      <Input></Input>
    </Box>
  );
};

export default LoginPage;
