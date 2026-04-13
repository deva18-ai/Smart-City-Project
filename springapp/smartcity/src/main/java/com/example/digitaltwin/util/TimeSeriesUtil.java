package com.example.digitaltwin.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TimeSeriesUtil {

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    public static String getCurrentTimestamp() {
        return LocalDateTime.now().format(FORMATTER);
    }
}
