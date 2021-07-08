import { makeStyles, Box, Typography, Input, Button } from "@material-ui/core";

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

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Box className={classes.inner}>
      <Typography variant="h3">로그인 하세요</Typography>
      <Input></Input>
      <Input></Input>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
