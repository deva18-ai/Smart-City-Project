package com.example.digitaltwin.ai;

import org.springframework.stereotype.Component;
import java.util.Random;

@Component
public class CrowdMovementModel {

    private final Random random = new Random();

    public double predictCrowdDensity(double currentDensity, boolean isEventDay) {
        if (isEventDay) {
            return currentDensity * (1.5 + random.nextDouble());
        }
        return currentDensity * 0.9; // Natural dispersion
    }
}
