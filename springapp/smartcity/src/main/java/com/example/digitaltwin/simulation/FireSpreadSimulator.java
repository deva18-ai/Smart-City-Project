package com.example.digitaltwin.simulation;

import com.example.digitaltwin.dto.SimulationResultDTO;
import org.springframework.stereotype.Service;
import java.util.Collections;

@Service
public class FireSpreadSimulator {

    public SimulationResultDTO simulateFire(Long buildingId, double windSpeed) {
        SimulationResultDTO result = new SimulationResultDTO();
        result.setSimulationId("FIRE-" + System.currentTimeMillis());

        String spread = windSpeed > 20 ? "RAPID" : "MODERATE";
        result.setOutcomeSummary(
                "Fire at Building " + buildingId + " with wind speed " + windSpeed + " km/h. Spread rate: " + spread);

        if (spread.equals("RAPID")) {
            result.setRiskLevel("CRITICAL");
            result.setSuggestedActions(Collections.singletonList("Dispatch all nearby units + Air support"));
        } else {
            result.setRiskLevel("HIGH");
            result.setSuggestedActions(Collections.singletonList("Dispatch standard fire response"));
        }

        result.setAffectedZones(Collections.singletonList("District containing Building " + buildingId));
        return result;
    }
}
