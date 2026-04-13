package com.example.digitaltwin.dto;

import lombok.Data;
import java.util.Map;

@Data
public class SimulationRequestDTO {
    private String simulationType;
    private Map<String, Object> parameters;
    private boolean saveResult;
}
