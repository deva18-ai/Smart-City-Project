# Digital Twin Smart City Frontend

## Project Overview
A production-grade React frontend for the Digital Twin Smart City platform. 
Features a futuristic "Control Room" aesthetic, 3D city visualization, and real-time dashboards.

## Architecture
- **Framework**: React.js
- **Routing**: React Router DOM
- **Visualization**: Three.js (3D Model), Mapbox (Geospatial)
- **Styling**: Pure CSS (Custom "Neon/Glass" Design System)
- **State/Network**: React Hooks + Axios

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   Access at `http://localhost:3000`.

## Modules
- **Dashboard**: Central Command Center with KPIs.
- **City View**: Interactive 3D Digital Twin.
- **Traffic**: Intersection control and congestion monitoring.
- **Energy**: Smart Grid stats and demand charts.
- **Environment**: AQI and pollution heatmaps.
- **Disaster**: Emergency simulation/response.
- **Planning**: Urban development tools.

## Configuration
- API Base URL: `http://localhost:8080` (Configured in `src/services/apiConfig.js`)
- 3D Settings: `src/components/cityview/City3DView.jsx`
