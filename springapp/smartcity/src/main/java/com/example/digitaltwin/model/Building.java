package com.example.digitaltwin.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Building {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type; // Residential, commercial, industrial
    private double currentPowerUsage; // kW
    private boolean hasSolarPanels;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @ManyToOne
    @JoinColumn(name = "energy_grid_id")
    private EnergyGrid connectedGrid;
}
