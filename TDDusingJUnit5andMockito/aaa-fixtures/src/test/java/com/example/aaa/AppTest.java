package com.example.aaa;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class AppTest {

    private int num1;
    private int num2;

    @BeforeEach
    public void setUp() {
        // Setup: Initialize values before each test
        num1 = 10;
        num2 = 5;
        System.out.println("Setting up before test...");
    }

    @AfterEach
    public void tearDown() {
        // Teardown: Clean up after each test
        System.out.println("Cleaning up after test...");
    }

    @Test
    public void testAddition() {
        // Arrange is already done in setup

        // Act
        int result = num1 + num2;

        // Assert
        assertEquals(15, result, "Addition should be 15");
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = num1 - num2;

        // Assert
        assertEquals(5, result, "Subtraction should be 5");
    }
}
