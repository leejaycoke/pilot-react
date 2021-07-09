import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  backdrop: {
    zIndex: 10,
    color: "#fff",
  },
});

export type LoadingBackdropProps = {
  open: boolean;
};

const LoadingBackdrop = ({ open }: LoadingBackdropProps) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingBackdrop;
