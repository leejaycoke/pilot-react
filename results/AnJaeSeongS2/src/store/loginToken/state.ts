import { LoginToken } from 'components/models';

function state(): LoginToken {
  return {
    accessToken: '',
  };
}

export default state;
export { LoginToken };
