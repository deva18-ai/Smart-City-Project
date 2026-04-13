package com.example.digitaltwin.ai;

import org.springframework.stereotype.Component;

@Component
public class TrafficPredictionModel {

    public double predictCongestion(double currentSpeed, double roadCapacity, int hourOfDay) {
        // Simple heuristic: Rush hour (8-10, 17-19) increases congestion
        double congestionFactor = 1.0;
        if ((hourOfDay >= 8 && hourOfDay <= 10) || (hourOfDay >= 17 && hourOfDay <= 19)) {
            congestionFactor = 1.5;
        }

        // Predict traffic density 0-100
        double predictedLoad = (100 - currentSpeed) * congestionFactor;
        return Math.min(100, Math.max(0, predictedLoad));
    }
}
