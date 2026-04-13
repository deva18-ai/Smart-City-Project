package com.example.digitaltwin.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class SimulationHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String simulationType; // TRAFFIC, FLOOD, ETC
    private String parameters; // JSON or descriptive string
    private String resultSummary;
    private LocalDateTime timestamp;
    private String triggeredBy;
}
