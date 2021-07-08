import { makeStyles, Typography } from "@material-ui/core";
import useInput from "../hooks/useInput";
import MainButton from "./MainButton";
import MainTextField from "./MainTextField";

const useStyles = makeStyles({
  box: {
    width: "50%",
    height: "50%",
    border: "black 1px solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const LoginForm = () => {
  const classes = useStyles();
  const [account, onChangeAccount] = useInput();
  const [password, onChangePassword] = useInput();

  return (
    <form className={classes.box}>
      <Typography variant="h3">로그인 하세요</Typography>
      <MainTextField
        label="ID"
        type="text"
        value={account}
        name="account"
        onChange={onChangeAccount}
      />
      <MainTextField
        label="PASSWORD"
        type="password"
        value={password}
        name="password"
        onChange={onChangePassword}
      />
      <MainButton label="Login" onClick={() => {}} />
    </form>
  );
};

export default LoginForm;
