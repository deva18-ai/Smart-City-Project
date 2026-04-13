package com.example.digitaltwin.simulation;

import com.example.digitaltwin.ai.DisasterImpactModel;
import com.example.digitaltwin.dto.SimulationResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Map;

@Service
public class FloodSimulator {

    @Autowired
    private DisasterImpactModel impactModel;

    public SimulationResultDTO simulateFlood(double rainfallMm, Long zoneId) {
        SimulationResultDTO result = new SimulationResultDTO();
        result.setSimulationId("FLOOD-" + System.currentTimeMillis());

        // Convert rainfall to intensity 1-10
        double intensity = Math.min(10, rainfallMm / 50.0);

        Map<String, Object> impact = impactModel.calculateImpact("FLOOD", intensity, 5000); // 5000 people/km2

        result.setOutcomeSummary("Flood simulation with " + rainfallMm + "mm rainfall.");
        result.setRiskLevel((String) impact.get("riskLevel"));
        result.setDetailedMetrics(impact);
        result.setAffectedZones(Arrays.asList("Zone " + zoneId, "Adjacent Lowlands"));
        result.setSuggestedActions(Arrays.asList("Activate pumping stations", "Evacuate low-lying areas"));

        return result;
    }
}
