package com.example.digitaltwin.controller;

import com.example.digitaltwin.dto.PollutionDataDTO;
import com.example.digitaltwin.model.PollutionZone;
import com.example.digitaltwin.service.PollutionMonitoringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/environment")
public class EnvironmentController {

    @Autowired
    private PollutionMonitoringService pollutionService;

    @PostMapping("/ingest")
    public PollutionZone ingestPollutionData(@RequestBody PollutionDataDTO data) {
        return pollutionService.updatePollutionData(data.getZoneId(), data.getAqi(), 10.0); // Mock wind
    }

    @GetMapping("/air-quality")
    public List<PollutionZone> getAirQuality() {
        return pollutionService.getAllZones();
    }
}
