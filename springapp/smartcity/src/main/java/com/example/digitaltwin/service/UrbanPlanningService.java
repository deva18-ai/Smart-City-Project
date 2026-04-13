package com.example.digitaltwin.service;

import com.example.digitaltwin.model.City;
import com.example.digitaltwin.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UrbanPlanningService {

    @Autowired
    private CityRepository cityRepository;

    public City createCity(City city) {
        return cityRepository.save(city);
    }

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    public City getCity(Long id) {
        return cityRepository.findById(id).orElse(null);
    }
}
