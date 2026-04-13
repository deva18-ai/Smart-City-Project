package com.example.digitaltwin.dto;

import lombok.Data;

@Data
public class DisasterScenarioDTO {
    private String type; // FLOOD, FIRE, EARTHQUAKE
    private double intensity; // 1-10 or specific metric
    private Long affectedZoneId;
    private double radiusKm;
}
