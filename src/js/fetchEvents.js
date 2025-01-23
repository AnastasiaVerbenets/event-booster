export default class EventsApiService {
  #API_KEY = 'cAC0PQfupJc4LZexavuatT33ADOVunkK';
  #BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

  constructor() {
    this.page = 0;
    this.pageSize = 12;
  }

  getApiKey() {
    return this.#API_KEY;
  }

  getBaseUrl() {
    return this.#BASE_URL;
  }

  async fetchEvents({ id = null } = {}) {
    const searchParams = new URLSearchParams({
      apikey: this.#API_KEY,
      page: this.page,
      size: this.pageSize,
    });
    const url = id ? `${this.#BASE_URL}/${id}?${searchParams}` : `${this.#BASE_URL}?${searchParams}&classificationName=music`;
    // const url = `${this.#BASE_URL}?${searchParams}&classificationName=music`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return response.json();
  }
}

