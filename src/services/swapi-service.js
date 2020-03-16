import axios from 'axios';

export default class SwapiService {

  constructor() {
    this._transformPerson = this._transformPerson.bind(this);
  }

  _baseUrl = 'https://swapi.co/api/';
  apiData = {
    people: {
      url: 'people/',
      method: this._transformPerson
    }
  };

  _transformPerson(item) {
    const pattern = /\/(\d+)\/$/;
    return {
      id: item.url.match(pattern)[1],
      name: item.name,
      height: item.height,
      hairColor: item.hair_color,
      eyeColor: item.eye_color
    }
  };

  fetchData = async (data) => {
    const { url, method } = data;
    const fetchUrl = this._baseUrl + url;
    const result = await axios.get(fetchUrl);
    return result.data.results.map(method);
  };

}