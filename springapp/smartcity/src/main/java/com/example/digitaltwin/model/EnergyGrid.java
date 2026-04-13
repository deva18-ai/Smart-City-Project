package com.example.digitaltwin.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class EnergyGrid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double capacity; // MW
    private double currentLoad; // MW
    private String status; // STABLE, OVERLOADED, FAILURE

    @OneToMany(mappedBy = "connectedGrid")
    private List<Building> connectedBuildings;
}
