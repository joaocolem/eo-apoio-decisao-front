import httpClient from '../httpClient';

const feedbackService = {
    // Criar um novo feedback
    createFeedback: async (feedbackRequestDTO) => {
        const response = await httpClient.post('/feedbacks', feedbackRequestDTO);
        return response.data;
    },

    // Buscar feedbacks por evento
    getFeedbacksByEvent: async (eventId) => {
        const response = await httpClient.get(`/feedbacks/event/${eventId}`);
        return response.data;
    },

    // Buscar feedbacks por participante (via e-mail)
    getFeedbacksByParticipant: async (email) => {
        const response = await httpClient.get(`/feedbacks/participant/${email}`);
        return response.data;
    },

    // Buscar a média de avaliação de um evento
    getAverageRating: async (eventId) => {
        const response = await httpClient.get(`/feedbacks/event/${eventId}/average-rating`);
        return response.data;
    },
};

export default feedbackService;
