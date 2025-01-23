import EventsApiService from '../fetchEvents';
import renderEvent from '../baseMarkUp';
import clearEventsList from'../baseMarkUp';

const eventsApiService = new EventsApiService();

const countrySearch = document.getElementById('countryInput');
const search = document.getElementById('searchInput');
const form = document.getElementById('headerForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    eventsApiService.searchParams = search.value;
    eventsApiService.page = 0;
    clearEventsList();

    await renderEvent();
})