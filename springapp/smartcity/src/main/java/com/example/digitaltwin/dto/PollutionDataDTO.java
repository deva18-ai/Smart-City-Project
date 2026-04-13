package com.example.digitaltwin.dto;

import lombok.Data;

@Data
public class PollutionDataDTO {
    private Long zoneId;
    private double aqi;
    private double co2;
    private double pm25;
}
