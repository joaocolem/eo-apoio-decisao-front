import httpClient from '../httpClient';

const organizerService = {
    createOrganizer: async (organizerRequestDTO) => {
        const response = await httpClient.post('/organizers', organizerRequestDTO);
        return response.data;
    },

    getOrganizersWithAverageRatings: async () => {
        const response = await httpClient.get('/organizers/ratings');
        return response.data;
    },
};

export default organizerService;
