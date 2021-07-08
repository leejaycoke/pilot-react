import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import User from "../models/User";
import MainButton from "./MainButton";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

export type UserProfileProps = {
  user: User;
  onClickLogout: () => void;
};

const UserProfile = ({ user, onClickLogout }: UserProfileProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          유저정보
        </Typography>
        <Typography variant="h6" gutterBottom>
          {`Account : ${user?.getAccount()}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Id : ${user?.getId()}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Name : ${user?.getName()}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Level : ${user?.getLevel()}`}
        </Typography>
      </CardContent>
      <CardActions>
        <MainButton onClick={onClickLogout} label="로그아웃" />
      </CardActions>
    </Card>
  );
};

export default UserProfile;
