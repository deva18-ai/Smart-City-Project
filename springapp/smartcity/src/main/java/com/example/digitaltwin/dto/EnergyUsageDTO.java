package com.example.digitaltwin.dto;

import lombok.Data;

@Data
public class EnergyUsageDTO {
    private Long gridId;
    private double currentLoad;
    private double forecastLoad;
    private String status;
}
