package com.example.digitaltwin.repository;

import com.example.digitaltwin.model.EnergyGrid;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for EnergyGrid entities.
 */
public interface EnergyRepository extends JpaRepository<EnergyGrid, Long> {
}
