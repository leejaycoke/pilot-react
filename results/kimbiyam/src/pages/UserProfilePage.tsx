import { makeStyles } from "@material-ui/core/styles";
import UserProfile from "../components/UserProfile";
import { Box } from "@material-ui/core";

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

  return (
    <Box className={classes.box}>
      <UserProfile />
    </Box>
  );
};

export default UserProfilePage;
