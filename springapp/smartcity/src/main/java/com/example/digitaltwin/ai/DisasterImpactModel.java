package com.example.digitaltwin.ai;

import org.springframework.stereotype.Component;
import java.util.HashMap;
import java.util.Map;

@Component
public class DisasterImpactModel {

    public Map<String, Object> calculateImpact(String disasterType, double intensity, double cityPopulationDensity) {
        Map<String, Object> impact = new HashMap<>(); // Standard Map interface
        double affectedRadiusKm = 0;
        String riskLevel = "LOW";

        switch (disasterType.toUpperCase()) {
            case "FLOOD":
                affectedRadiusKm = intensity * 2.5;
                break;
            case "FIRE":
                affectedRadiusKm = intensity * 0.5;
                break;
            case "EARTHQUAKE":
                affectedRadiusKm = intensity * 10;
                break;
            default:
                affectedRadiusKm = 1.0;
        }

        if (affectedRadiusKm > 10 || intensity > 7) {
            riskLevel = "HIGH";
        } else if (affectedRadiusKm > 5 || intensity > 4) {
            riskLevel = "MEDIUM";
        }

        impact.put("affectedRadiusKm", affectedRadiusKm);
        impact.put("riskLevel", riskLevel);
        impact.put("estimatedAffectedPopulation",
                affectedRadiusKm * affectedRadiusKm * Math.PI * cityPopulationDensity);

        return impact;
    }
}
