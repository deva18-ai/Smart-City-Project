import api from './apiConfig';

const getAirQuality = () => {
    return api.get('/environment/aqi');
};

const getHeatmapData = () => {
    return api.get('/environment/heatmap');
};

export default {
    getAirQuality,
    getHeatmapData
};
