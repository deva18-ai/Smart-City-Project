package com.example.digitaltwin.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.context.annotation.Bean;

@Configuration
@EnableScheduling
public class SchedulerConfiguration {

    @Bean
    public ThreadPoolTaskScheduler taskScheduler() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(5); // Handle multiple simulations/data ingestion streams
        scheduler.setThreadNamePrefix("DigitalTwin-Scheduler-");
        scheduler.initialize();
        return scheduler;
    }
}
