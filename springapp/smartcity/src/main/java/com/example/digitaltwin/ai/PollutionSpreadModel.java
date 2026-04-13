package com.example.digitaltwin.ai;

import org.springframework.stereotype.Component;

@Component
public class PollutionSpreadModel {

    public double predictSpread(double initialAqi, double windSpeed, double windDirection) {
        // Wind speed disperses pollution but spreads it further
        // Higher wind speed -> Lower local AQI, larger affected radius (simplified)
        if (windSpeed > 10) {
            return initialAqi * 0.8; // Dispersion
        } else {
            return initialAqi * 1.1; // Accumulation
        }
    }
}
