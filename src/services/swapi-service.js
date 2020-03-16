import axios from 'axios';

export default class SwapiService {

  constructor() {
    this._transformPerson = this._transformPerson.bind(this);
  }

  _baseUrl = 'https://swapi.co/api/';
  _baseImgUrl = 'https://starwars-visualguide.com/assets/img/';
  apiData = {
    people: {
      url: 'people/',
      imgUrl: 'characters/',
      method: this._transformPerson
    }
  };

  _transformPerson(self, item) {
    const pattern = /\/(\d+)\/$/;
    const id = item.url.match(pattern)[1];
    const img = self._baseImgUrl + self.apiData.people.imgUrl + id + '.jpg';
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
    return result.data.results.map((item) => method(this, item));
  };

}