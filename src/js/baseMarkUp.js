import EventsApiService from './fetchEvents';
import markUpEvents from '../templates/card';

const list = document.getElementById('js-list');

const eventsApiService = new EventsApiService();

renderEvent();

export default async function renderEvent() {
    try {
        const data = await eventsApiService.fetchEvents();
        const events = data._embedded?.events || [];
        const markUp = markUpEvents(events);

        list.insertAdjacentHTML('beforeend', markUp);

    } catch (error) {
        console.error(error);
    }
}

