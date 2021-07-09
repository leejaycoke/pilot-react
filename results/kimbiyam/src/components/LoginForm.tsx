import { makeStyles, Typography } from "@material-ui/core";
import useInput from "../hooks/useInput";
import MainButton from "./MainButton";
import MainTextField from "./MainTextField";
import useLogin from "../hooks/useLogin";
import { FormEvent } from "react";
import LoginData from "../models/LoginData";
import LoadingBackdrop from "../components/LoadingBackdrop";

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
  errorText: {
    margin: "8px 0",
  },
});

const LoginForm = () => {
  const classes = useStyles();
  const { value: account, onChange: onChangeAccount } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const { errMsg, login, isLoading } = useLogin();

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData = new LoginData(account, password);
    await login(loginData);
  };

  return (
    <form className={classes.box} onSubmit={handleOnSubmit}>
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
      {errMsg && (
        <Typography className={classes.errorText} color="error">
          {errMsg}
        </Typography>
      )}
      <MainButton label="Login" type="submit" />
      <LoadingBackdrop open={isLoading} />
    </form>
  );
};

export default LoginForm;
