import api from './apiConfig';

const getTrafficData = () => {
    return api.get('/traffic/live');
};

const updateSignal = (intersectionId, duration) => {
    return api.post(`/traffic/signal/${intersectionId}`, { duration });
};

export default {
    getTrafficData,
    updateSignal
};
