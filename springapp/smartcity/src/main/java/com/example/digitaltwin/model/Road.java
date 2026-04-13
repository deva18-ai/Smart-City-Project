package com.example.digitaltwin.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Road {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int lanes;
    private double currentTrafficSpeed; // km/h
    private double lengthKm;
    private int congestionLevel; // 0-100

    @ManyToOne
    @JoinColumn(name = "start_node_id")
    private TrafficNode startNode;

    @ManyToOne
    @JoinColumn(name = "end_node_id")
    private TrafficNode endNode;
}
