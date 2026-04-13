package com.example.digitaltwin.repository;

import com.example.digitaltwin.model.SimulationHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SimulationRepository extends JpaRepository<SimulationHistory, Long> {
}
