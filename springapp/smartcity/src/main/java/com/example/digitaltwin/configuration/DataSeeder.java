package com.example.digitaltwin.configuration;

import com.example.digitaltwin.model.Building;
import com.example.digitaltwin.model.City;
import com.example.digitaltwin.model.EnergyGrid;
import com.example.digitaltwin.model.TrafficNode;
import com.example.digitaltwin.repository.CityRepository;
import com.example.digitaltwin.repository.EnergyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private EnergyRepository energyRepository;

    @Override
    public void run(String... args) throws Exception {
        if (cityRepository.count() == 0) {
            System.out.println("No city data found. Seeding initial data...");
            seedData();
            System.out.println("Data seeding completed.");
        }
    }

    private void seedData() {
        // 1. Create Energy Grids
        EnergyGrid grid1 = new EnergyGrid();
        grid1.setName("Downtown Grid");
        grid1.setCapacity(1000.0);
        grid1.setCurrentLoad(450.0);
        grid1.setStatus("STABLE");

        EnergyGrid grid2 = new EnergyGrid();
        grid2.setName("Industrial Grid");
        grid2.setCapacity(2000.0);
        grid2.setCurrentLoad(1200.0);
        grid2.setStatus("STABLE");

        energyRepository.saveAll(Arrays.asList(grid1, grid2));

        // 2. Create City
        City city = new City();
        city.setName("Neo-Metro");
        city.setLatitude(40.7128);
        city.setLongitude(-74.0060);
        city.setPopulation(1250000);
        city.setAreaKm2(500.0);

        // Initialize lists
        city.setBuildings(new ArrayList<>());
        city.setTrafficNodes(new ArrayList<>());

        // 3. Create Buildings
        Building b1 = new Building();
        b1.setName("Central Tower");
        b1.setType("Commercial");
        b1.setCurrentPowerUsage(150.0);
        b1.setHasSolarPanels(true);
        b1.setConnectedGrid(grid1);
        b1.setCity(city);
        city.getBuildings().add(b1);

        Building b2 = new Building();
        b2.setName("City Hospital");
        b2.setType("Institutional");
        b2.setCurrentPowerUsage(300.0);
        b2.setHasSolarPanels(true);
        b2.setConnectedGrid(grid1);
        b2.setCity(city);
        city.getBuildings().add(b2);

        Building b3 = new Building();
        b3.setName("Factory Sector A");
        b3.setType("Industrial");
        b3.setCurrentPowerUsage(800.0);
        b3.setHasSolarPanels(false);
        b3.setConnectedGrid(grid2);
        b3.setCity(city);
        city.getBuildings().add(b3);

        // 4. Create Traffic Nodes
        TrafficNode t1 = new TrafficNode();
        t1.setName("Main St. Intersection");
        t1.setLatitude(40.7130);
        t1.setLongitude(-74.0065);
        t1.setHasTrafficLight(true);
        t1.setCity(city);
        city.getTrafficNodes().add(t1);

        TrafficNode t2 = new TrafficNode();
        t2.setName("Highway Exit 5");
        t2.setLatitude(40.7150);
        t2.setLongitude(-74.0080);
        t2.setHasTrafficLight(false);
        t2.setCity(city);
        city.getTrafficNodes().add(t2);

        // Save City (cascades to buildings and traffic nodes)
        cityRepository.save(city);
    }
}
