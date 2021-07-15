import { makeStyles, Box } from "@material-ui/core";
import LoginForm from "../components/LoginForm";

const useStyles = makeStyles({
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: "50%",
    height: "50%",
    border: "black 1px solid",
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
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
