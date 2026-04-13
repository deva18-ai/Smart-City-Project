package com.example.digitaltwin.ai;

import org.springframework.stereotype.Component;

@Component
public class EnergyForecaster {

    public double predictUsage(double currentLoad, double temperature) {
        // High temp -> AC usage -> Higher load
        double tempFactor = 1.0;
        if (temperature > 30) {
            tempFactor = 1.2 + (temperature - 30) * 0.05;
        } else if (temperature < 10) {
            tempFactor = 1.1 + (10 - temperature) * 0.03;
            // Heating load
        }
        return currentLoad * tempFactor;
    }
}
