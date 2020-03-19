import axios from 'axios';

export default class SwapiService {

  _baseUrl = 'https://swapi.co/api/';
  _baseImgUrl = 'https://starwars-visualguide.com/assets/img/';
  apiData = {
    people: {
      url: 'people/',
      imgUrl: 'characters/',
      method: this._transformPerson
    }
  };

  _catchId = (url) => {
    const pattern = /\/(\d+)\/$/;
    return url.match(pattern)[1];
  };

  _transformPerson(item) {
    const id = this._catchId(item.url);
    const img = this._baseImgUrl + this.apiData.people.imgUrl + id + '.jpg';
    return {
      id,
      name: item.name,
      img,
      height: item.height,
      hairColor: item.hair_color,
      eyeColor: item.eye_color
    }
  };

  fetchData = async (data) => {
    const { url, method } = data;
    const fetchUrl = this._baseUrl + url;
    const result = await axios.get(fetchUrl);
    return result.data.results.map((item) => method.call(this, item));
  };

}