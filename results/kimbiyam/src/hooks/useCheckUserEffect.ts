import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useCheckUserEffect = ({
  isLoggedIn,
  successPagePath,
  failurePagePath,
}: {
  isLoggedIn: boolean;
  successPagePath: string;
  failurePagePath: string;
}) => {
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push(successPagePath);
      return;
    }

    history.push(failurePagePath);
  }, [isLoggedIn, successPagePath, failurePagePath, history]);
};

export default useCheckUserEffect;
