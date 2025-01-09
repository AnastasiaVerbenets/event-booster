import FetchEvents from './fetchEvents';
import marUpEvents from '../templates/card';

const list = document.getElementById('js-list');

const fetchEvents = new FetchEvents();

async function renderEvent() {
    try {
        const data = await fetchEvents.EventsApiService();
        const events = data._embedded?.events || [];
        const markUp = marUpEvents(events);

        list.insertAdjacentHTML('beforeend', markUp);

    } catch (error) {
        console.error(error);
    }
}

renderEvent();