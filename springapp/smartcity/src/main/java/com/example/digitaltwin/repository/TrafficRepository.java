package com.example.digitaltwin.repository;

import com.example.digitaltwin.model.Road;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrafficRepository extends JpaRepository<Road, Long> {
}
