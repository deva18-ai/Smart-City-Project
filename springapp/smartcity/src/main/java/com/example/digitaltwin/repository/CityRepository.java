package com.example.digitaltwin.repository;

import com.example.digitaltwin.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
}
