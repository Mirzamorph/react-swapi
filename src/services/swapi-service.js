import axios from 'axios';

export default class SwapiService {

  _baseUrl = 'https://swapi.co/api/';

  fetchData = async (url) => {
    const fetchUrl = this._baseUrl + url;
    return await axios.get(fetchUrl);
  };

}