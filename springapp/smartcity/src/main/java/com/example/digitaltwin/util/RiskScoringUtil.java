package com.example.digitaltwin.util;

public class RiskScoringUtil {

    public static String calculateRiskLevel(double probability, double impact) {
        double score = probability * impact;
        if (score > 80)
            return "CRITICAL";
        if (score > 50)
            return "HIGH";
        if (score > 20)
            return "MEDIUM";
        return "LOW";
    }
}
