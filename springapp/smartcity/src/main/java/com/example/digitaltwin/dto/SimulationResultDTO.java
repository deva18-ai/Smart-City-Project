package com.example.digitaltwin.dto;

import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class SimulationResultDTO {
    private String simulationId;
    private String outcomeSummary;
    private String riskLevel; // LOW, MEDIUM, HIGH
    private List<String> affectedZones;
    private List<String> suggestedActions;
    private Map<String, Object> detailedMetrics;
}
