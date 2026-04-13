package com.example.digitaltwin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class DigitalTwinEngineService {

    @Autowired
    private TrafficAnalysisService trafficService;

    @Autowired
    private EnergyOptimizationService energyService;

    @Autowired
    private PollutionMonitoringService pollutionService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    // Simulation Tick: Every 5 seconds update the "Live" dashboard
    @Scheduled(fixedRate = 5000)
    public void runCityHeartbeat() {
        // In a real system, this might fetch from sensors or run a complex physics
        // step.
        // Here we broadcast a "pulse" to the frontend via WebSocket.

        Map<String, Object> cityState = new HashMap<>();
        cityState.put("timestamp", System.currentTimeMillis());
        cityState.put("status", "ONLINE");
        cityState.put("activeAlerts", new Random().nextInt(3)); // Mock alerts

        // Broadcast to WebSocket topic
        messagingTemplate.convertAndSend("/topic/city-updates", (Object) cityState);

        System.out.println("Digital Twin Heartbeat: Broadcasted city state Update.");
    }
}
