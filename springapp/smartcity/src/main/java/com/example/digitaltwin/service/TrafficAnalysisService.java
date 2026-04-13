package com.example.digitaltwin.service;

import com.example.digitaltwin.ai.TrafficPredictionModel;
import com.example.digitaltwin.model.Road;
import com.example.digitaltwin.repository.TrafficRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrafficAnalysisService {

    @Autowired
    private TrafficRepository trafficRepository;

    @Autowired
    private TrafficPredictionModel predictionModel;

    public Road updateTrafficData(Long roadId, double speed) {
        Road road = trafficRepository.findById(roadId).orElseThrow(() -> new RuntimeException("Road not found"));
        road.setCurrentTrafficSpeed(speed);

        // AI Analysis
        double congestion = predictionModel.predictCongestion(speed, road.getLanes() * 2000, 12); // Mock hour
        road.setCongestionLevel((int) congestion);

        return trafficRepository.save(road);
    }

    public List<Road> getAllRoads() {
        return trafficRepository.findAll();
    }
}
