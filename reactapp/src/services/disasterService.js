import api from './apiConfig';

const triggerSimulation = (scenario) => {
    return api.post('/disaster/simulate', { scenario });
};

const getActiveAlerts = () => {
    return api.get('/disaster/alerts');
};

export default {
    triggerSimulation,
    getActiveAlerts
};
