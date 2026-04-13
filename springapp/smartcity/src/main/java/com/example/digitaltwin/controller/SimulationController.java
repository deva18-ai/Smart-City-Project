package com.example.digitaltwin.controller;

import com.example.digitaltwin.dto.SimulationRequestDTO;
import com.example.digitaltwin.dto.SimulationResultDTO;
import com.example.digitaltwin.service.DisasterSimulationService;
import com.example.digitaltwin.simulation.TrafficSimulator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/simulate")
public class SimulationController {

    @Autowired
    private TrafficSimulator trafficSimulator;

    @Autowired
    private DisasterSimulationService disasterService;

    @PostMapping("/traffic")
    public SimulationResultDTO simulateTraffic(@RequestBody SimulationRequestDTO request) {
        Long roadId = Long.valueOf(request.getParameters().get("roadId").toString());
        int duration = Integer.parseInt(request.getParameters().get("duration").toString());
        return trafficSimulator.simulateTrafficBlockage(roadId, duration);
    }

    @PostMapping("/flood")
    public SimulationResultDTO simulateFlood(@RequestBody SimulationRequestDTO request) {
        double rainfall = Double.parseDouble(request.getParameters().get("rainfall").toString());
        Long zoneId = Long.valueOf(request.getParameters().get("zoneId").toString());
        return disasterService.runFloodSimulation(rainfall, zoneId);
    }

    @PostMapping("/disaster")
    public SimulationResultDTO simulateDisaster(@RequestBody SimulationRequestDTO request) {
        String type = request.getSimulationType();
        Map<String, Object> params = request.getParameters();

        if ("FIRE".equalsIgnoreCase(type)) {
            Long buildingId = Long.valueOf(params.get("buildingId").toString());
            double windSpeed = Double.parseDouble(params.get("windSpeed").toString());
            return disasterService.runFireSimulation(buildingId, windSpeed);
        } else if ("EVACUATION".equalsIgnoreCase(type)) {
            Long zoneId = Long.valueOf(params.get("zoneId").toString());
            int population = Integer.parseInt(params.get("population").toString());
            return disasterService.runEvacuationSimulation(zoneId, population);
        }

        throw new IllegalArgumentException("Unknown simulation type: " + type);
    }
}
