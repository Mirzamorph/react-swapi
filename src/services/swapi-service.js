import axios from 'axios';

export default class SwapiService {
  constructor() {
    this.baseUrl = 'https://swapi.co/api/';
    this.baseImgUrl = 'https://starwars-visualguide.com/assets/img/';
    this.apiData = {
      people: {
        url: 'people/',
        imgUrl: 'characters/',
        method: this.transformPerson,
      },
      starships: {
        url: 'starships/',
        imgUrl: 'starships/',
        method: this.transformStarship,
      },
      planets: {
        url: 'planets/',
        imgUrl: 'planets/',
        method: this.transformPlanet,
      },
    };
  }

  static catchId(url) {
    const pattern = /\/(\d+)\/$/;
    return url.match(pattern)[1];
  }

  transformPerson(item) {
    const id = this.catchId(item.url);
    const img = `${this.baseImgUrl + this.apiData.people.imgUrl + id}.jpg`;
    return {
      id,
      name: item.name,
      img,
      height: item.height,
      hairColor: item.hair_color,
      eyeColor: item.eye_color,
    };
  }

  transformStarship(item) {
    const id = this.catchId(item.url);
    const img = `${this.baseImgUrl + this.apiData.starships.imgUrl + id}.jpg`;
    return {
      id,
      name: item.name,
      img,
      model: item.model,
      length: item.length,
      passengers: item.passengers,
    };
  }

  transformPlanet(item) {
    const id = this.catchId(item.url);
    const img = `${this.baseImgUrl + this.apiData.planets.imgUrl + id}.jpg`;
    return {
      id,
      name: item.name,
      img,
      climate: item.climate,
      diameter: item.diameter,
      population: item.population,
    };
  }

  async fetchData(data) {
    const {
      url,
      method,
    } = data;
    const fetchUrl = this.baseUrl + url;
    const result = await axios.get(fetchUrl);
    return result.data.results.map((item) => method.call(this, item));
  }
}
