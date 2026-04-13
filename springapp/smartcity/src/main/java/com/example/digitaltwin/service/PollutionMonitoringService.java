package com.example.digitaltwin.service;

import com.example.digitaltwin.ai.PollutionSpreadModel;
import com.example.digitaltwin.model.PollutionZone;
import com.example.digitaltwin.repository.EnvironmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollutionMonitoringService {

    @Autowired
    private EnvironmentRepository environmentRepository;

    @Autowired
    private PollutionSpreadModel spreadModel;

    public PollutionZone updatePollutionData(Long zoneId, double aqi, double windSpeed) {
        PollutionZone zone = environmentRepository.findById(zoneId)
                .orElseThrow(() -> new RuntimeException("Zone not found"));
        zone.setCurrentAqi(aqi);

        // Use AI to predict where it goes next? Or just update current state and log
        // warning
        double predictedSpread = spreadModel.predictSpread(aqi, windSpeed, 0); // direction 0 for now
        // Could save predicted value somewhere or trigger alert

        return environmentRepository.save(zone);
    }

    public List<PollutionZone> getAllZones() {
        return environmentRepository.findAll();
    }
}
