package com.example.digitaltwin.dto;

import lombok.Data;

@Data
public class TrafficDataDTO {
    private Long roadId;
    private double speed;
    private int congestionLevel;
    private String timestamp;
}
