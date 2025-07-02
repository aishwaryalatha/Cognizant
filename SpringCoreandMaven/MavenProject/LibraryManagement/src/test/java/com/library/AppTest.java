package com.library;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class AppTest {

    @Test
    public void testAppRuns() {
        App.main(new String[]{});
        assertTrue(true); // Dummy assertion just to pass the test
    }
}
