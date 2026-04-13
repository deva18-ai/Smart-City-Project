package com.example.digitaltwin.controller;

import com.example.digitaltwin.dto.TrafficDataDTO;
import com.example.digitaltwin.model.Road;
import com.example.digitaltwin.service.TrafficAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/traffic")
public class TrafficController {

    @Autowired
    private TrafficAnalysisService trafficService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @PostMapping("/ingest")
    public Object ingestTrafficData(@RequestBody TrafficDataDTO data) {
        // Ingest real-time data
        Road updatedRoad = trafficService.updateTrafficData(data.getRoadId(), data.getSpeed());

        // Broadcast update
        messagingTemplate.convertAndSend("/topic/traffic-updates", updatedRoad);

        return updatedRoad;
    }

    @GetMapping("/live")
    public List<Road> getLiveTraffic() {
        return trafficService.getAllRoads();
    }
}
