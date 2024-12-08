import httpClient from '../httpClient';

const eventService = {
    getAllEvents: async () => {
        const response = await httpClient.get('/events');
        return response.data;
    },

    getUpcomingEvents: async () => {
        const response = await httpClient.get('/events/upcoming');
        return response.data;
    },

    createEvent: async (event) => {
        const response = await httpClient.post('/events', event);
        return response.data;
    },

    registerParticipant: async (eventId, participantEmail) => {
        const response = await httpClient.post(`/events/${eventId}/register`, {
            participantEmail,
        });
        return response.data;
    },

    getFeedbackAverages: async () => {
        const response = await httpClient.get('/events/feedback-averages');
        return response.data;
    },
};

export default eventService;
