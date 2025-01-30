import modalMarkUp from "../templates/modalCard";
import EventsApiService from "./fetchEvents";

const eventsList = document.getElementById('js-list');
const modalCard = document.getElementById('modal-card');

const eventsApiService = new EventsApiService();

eventsList.addEventListener('click', openModalCard);

export default async function openModalCard(e) {
    const card = e.target.closest('.cards__item');

    if (!card) return;

    const eventId = card.dataset.id;

    console.log(eventId);

    try {
        const eventData = await eventsApiService.fetchEventsById(eventId);

        const markUp = modalMarkUp(eventData);

        modalCard.insertAdjacentHTML('beforeend', markUp);
        modalCard.classList.remove('hidden');
        modalCard.addEventListener('click', onModalClose);
    } catch (error) {
        console.error(error);
    }
}

function onModalClose(e) {
    if (e.target.classList.contains('modal__btn-close') || e.target === modalCard) {
        modalCard.classList.add('hidden');
        modalCard.removeEventListener('click', onModalClose);
        modalCard.innerHTML = '';
    }
}