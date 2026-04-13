package com.example.digitaltwin.simulation;

import com.example.digitaltwin.ai.CrowdMovementModel;
import com.example.digitaltwin.dto.SimulationResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class EvacuationSimulator {

    @Autowired
    private CrowdMovementModel crowdModel;

    public SimulationResultDTO simulateEvacuation(Long zoneId, int population) {
        SimulationResultDTO result = new SimulationResultDTO();
        result.setSimulationId("EVAC-" + System.currentTimeMillis());

        // Predict density during movement
        double movementDensity = crowdModel.predictCrowdDensity(population / 1000.0, false); // Density per km2

        double timeToEvacuateHours = (population / 5000.0) * (movementDensity > 5 ? 1.5 : 1.0);

        result.setOutcomeSummary("Evacuation of " + population + " people from Zone " + zoneId + ". Estimated time: "
                + String.format("%.2f", timeToEvacuateHours) + " hours.");
        result.setRiskLevel(timeToEvacuateHours > 4 ? "HIGH" : "LOW");
        result.setSuggestedActions(Collections.singletonList("Open emergency corridors A and B"));

        return result;
    }
}
