import { makeStyles } from "@material-ui/core/styles";
import UserProfile from "../components/UserProfile";
import { Box, CircularProgress } from "@material-ui/core";
import useUserProfileQuery from "../hooks/useUserProfileQuery";
import tokenStorage from "../utils/tokenStorage";
import { useHistory } from "react-router-dom";
import authApi from "../api/authApi";

const useStyles = makeStyles({
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const UserProfilePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { data: user, isLoading, isSuccess } = useUserProfileQuery();

  const handleOnClickLogout = async () => {
    await authApi.logout();
    tokenStorage.clearToken();
    history.push("/");
  };

  return (
    <Box className={classes.box}>
      {isLoading && <CircularProgress />}
      {isSuccess && user && (
        <UserProfile user={user} onClickLogout={handleOnClickLogout} />
      )}
    </Box>
  );
};

export default UserProfilePage;
