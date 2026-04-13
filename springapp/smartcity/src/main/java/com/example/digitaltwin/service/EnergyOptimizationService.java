package com.example.digitaltwin.service;

import com.example.digitaltwin.ai.EnergyForecaster;
import com.example.digitaltwin.model.EnergyGrid;
import com.example.digitaltwin.repository.EnergyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Service for optimizing energy distribution
@Service
public class EnergyOptimizationService {

    @Autowired
    private EnergyRepository energyRepository;

    @Autowired
    private EnergyForecaster forecastModel;

    public EnergyGrid updateGridLoad(Long gridId, double load, double temperature) {
        EnergyGrid grid = energyRepository.findById(gridId).orElseThrow(() -> new RuntimeException("Grid not found"));
        grid.setCurrentLoad(load);

        // Check forecast
        double predictedDetail = forecastModel.predictUsage(load, temperature);
        if (predictedDetail > grid.getCapacity()) {
            grid.setStatus("WARNING");
        } else {
            grid.setStatus("STABLE");
        }

        return energyRepository.save(grid);
    }

    public List<EnergyGrid> getAllGrids() {
        return energyRepository.findAll();
    }
}
