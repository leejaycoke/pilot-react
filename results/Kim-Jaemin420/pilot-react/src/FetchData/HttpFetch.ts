import axios from 'axios';

class HttpFetch {
  private readonly url: string;
  private readonly data: any;

  constructor(url: string, data: any) {
    this.url = url;
    this.data = data;
  }

  async PostFetch () {
    try {
      const res = await axios.post(this.url, this.data);
      return res.data;

    } catch (e) {
      console.error(e);
      return e.response.data;
    }
  }
}

export default HttpFetch;
