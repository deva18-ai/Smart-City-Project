package com.example.digitaltwin.service;

import com.example.digitaltwin.dto.SimulationResultDTO;
import com.example.digitaltwin.simulation.EvacuationSimulator;
import com.example.digitaltwin.simulation.FireSpreadSimulator;
import com.example.digitaltwin.simulation.FloodSimulator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DisasterSimulationService {

    @Autowired
    private FloodSimulator floodSimulator;

    @Autowired
    private FireSpreadSimulator fireSimulator;

    @Autowired
    private EvacuationSimulator evacuationSimulator;

    public SimulationResultDTO runFloodSimulation(double rainfall, Long zoneId) {
        return floodSimulator.simulateFlood(rainfall, zoneId);
    }

    public SimulationResultDTO runFireSimulation(Long buildingId, double windSpeed) {
        return fireSimulator.simulateFire(buildingId, windSpeed);
    }

    public SimulationResultDTO runEvacuationSimulation(Long zoneId, int population) {
        return evacuationSimulator.simulateEvacuation(zoneId, population);
    }
}
