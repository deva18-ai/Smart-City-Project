package com.example.digitaltwin.repository;

import com.example.digitaltwin.model.PollutionZone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnvironmentRepository extends JpaRepository<PollutionZone, Long> {
}
