package com.example.digitaltwin.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PollutionZone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double currentAqi; // Air Quality Index
    private double co2Level;
    private double pm25;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;
}
