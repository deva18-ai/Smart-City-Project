import api from './apiConfig';

const startSimulation = (params) => {
    return api.post('/simulation/start', params);
};

const stopSimulation = () => {
    return api.post('/simulation/stop');
};

const getSimulationState = () => {
    return api.get('/simulation/state');
};

export default {
    startSimulation,
    stopSimulation,
    getSimulationState
};
