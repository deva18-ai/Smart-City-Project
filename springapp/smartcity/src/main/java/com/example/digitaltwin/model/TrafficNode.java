package com.example.digitaltwin.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class TrafficNode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double latitude;
    private double longitude;
    private boolean hasTrafficLight;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @OneToMany(mappedBy = "startNode")
    private List<Road> outgoingRoads;

    @OneToMany(mappedBy = "endNode")
    private List<Road> incomingRoads;
}
