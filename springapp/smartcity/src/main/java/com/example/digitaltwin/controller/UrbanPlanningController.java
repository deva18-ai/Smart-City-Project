package com.example.digitaltwin.controller;

import com.example.digitaltwin.model.City;
import com.example.digitaltwin.service.UrbanPlanningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/urban-planning")
public class UrbanPlanningController {

    @Autowired
    private UrbanPlanningService urbanService;

    @PostMapping("/city")
    public City createCity(@RequestBody City city) {
        return urbanService.createCity(city);
    }

    @GetMapping("/cities")
    public List<City> getAllCities() {
        return urbanService.getAllCities();
    }
}
