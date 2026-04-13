import api from './apiConfig';

const getEnergyStats = () => {
    return api.get('/energy/stats');
};

const getConsumptionHistory = () => {
    return api.get('/energy/history');
};

export default {
    getEnergyStats,
    getConsumptionHistory
};
