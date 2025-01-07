// classificationName=music;
// segmentId=KZFzniwnSyZfZ7v7nJ;

const API_KEY = 'cAC0PQfupJc4LZexavuatT33ADOVunkK';

fetch(
  `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&segmentId=KZFzniwnSyZfZ7v7nJ&size=8&page=1`
)
  .then(response => response.json())
  .then(data => console.log(data));

export default class EventsApiService {
  #API_KEY = 'cAC0PQfupJc4LZexavuatT33ADOVunkK';
  #BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

  constructor() {
    this.page = 1;
    this.pageSize = 8;
  }

  async fetchEvents() {
    const url = `${this.#BASE_URL}?apikey=${
      this.#API_KEY
    }&segmentId=KZFzniwnSyZfZ7v7nJ&size=${this.pageSize}&page=${this.page}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return response.json();
  }
}
