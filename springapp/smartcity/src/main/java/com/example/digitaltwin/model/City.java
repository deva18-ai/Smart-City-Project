package com.example.digitaltwin.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double latitude;
    private double longitude;
    private long population;
    private double areaKm2;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    private List<TrafficNode> trafficNodes;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    private List<Building> buildings;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    private List<PollutionZone> pollutionZones;
}
