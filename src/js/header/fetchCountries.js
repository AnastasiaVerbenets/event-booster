// import EventsApiService from '../fetchEvents';

// export default class CountryApiService extends EventsApiService {
//   async fetchCountries() {
//     const baseUrl = this.getBaseUrl();
//     const apiKey = this.getApiKey();
//     const url = `${baseUrl}/_embedded/venues?apikey=${apiKey}`;

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error('Failed to fetch countries');
//     }

//     const data = await response.json();

//     return data._embedded.venues.map(venue => ({
//       name: venue.country.name,
//       countryCode: venue.country.countryCode,
//     }));
//   }
// }
