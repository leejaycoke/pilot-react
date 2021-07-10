import axios from 'axios';

class HttpFetch {
  private readonly url: string;
  private readonly data: any;

  constructor(url: string, data: any = null) {
    this.url = url;
    this.data = data;
  }

   PostFetch =  async () => {
     try {
       const res = await axios.post(this.url, this.data);
       return res.data;

     } catch (e) {
       console.error(e);
       return e.response.data;
     }
   };

  GetFetch = async () => {
    try {
      const res = await axios.get(this.url,{
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      return res;
    } catch (e) {
      console.error(e);
      return e;
    }
  };
}

export default HttpFetch;
