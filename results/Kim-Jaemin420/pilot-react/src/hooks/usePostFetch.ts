import axios from 'axios';

const usePostFetch = (url: string, data: any) => {
  return async () => {
    try {
      const res = await axios.post(url, data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
};

export default usePostFetch;
