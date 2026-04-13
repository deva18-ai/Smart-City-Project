package com.example.digitaltwin.controller;

import com.example.digitaltwin.dto.EnergyUsageDTO;
import com.example.digitaltwin.model.EnergyGrid;
import com.example.digitaltwin.service.EnergyOptimizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/energy")
public class EnergyController {

    @Autowired
    private EnergyOptimizationService energyService;

    @PostMapping("/ingest")
    public EnergyGrid ingestEnergyData(@RequestBody EnergyUsageDTO data) {
        // Assume temperature is fetched from weather service or passed in. Mocking 25.0
        return energyService.updateGridLoad(data.getGridId(), data.getCurrentLoad(), 25.0);
    }

    @GetMapping("/forecast")
    public List<EnergyGrid> getEnergyForecast() {
        return energyService.getAllGrids(); // In a real app, this would return projected values
    }
}
