package com.example.digitaltwin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/disaster")
public class DisasterController {

    @GetMapping("/active")
    public List<String> getActiveDisasters() {
        return Collections.emptyList(); // Mock: No active disasters
    }
}
