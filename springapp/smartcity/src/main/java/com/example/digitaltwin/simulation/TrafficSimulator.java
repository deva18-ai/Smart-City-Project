package com.example.digitaltwin.simulation;

import com.example.digitaltwin.ai.TrafficPredictionModel;
import com.example.digitaltwin.dto.SimulationResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Map;

@Service
public class TrafficSimulator {

    @Autowired
    private TrafficPredictionModel predictionModel;

    public SimulationResultDTO simulateTrafficBlockage(Long roadId, int durationHours) {
        SimulationResultDTO result = new SimulationResultDTO();
        result.setSimulationId("TRAFFIC-" + System.currentTimeMillis());
        result.setOutcomeSummary("Simulated blockage on Road " + roadId + " for " + durationHours + " hours.");

        // Use AI model to predict impact
        double impact = predictionModel.predictCongestion(0, 100, 18); // Mock params

        if (impact > 80) {
            result.setRiskLevel("HIGH");
            result.setSuggestedActions(Collections.singletonList("Reroute traffic via Avenue B"));
        } else {
            result.setRiskLevel("MEDIUM");
            result.setSuggestedActions(Collections.singletonList("Issue traffic warning"));
        }

        result.setAffectedZones(Collections.singletonList("Zone connected to Road " + roadId));
        return result;
    }
}
