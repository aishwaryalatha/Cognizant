package com.example;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class MainApp {
    public static void main(String[] args) {
        // Create configuration
        Configuration cfg = new Configuration();
        cfg.configure("hibernate.cfg.xml");

        // Build session factory
        SessionFactory sessionFactory = cfg.buildSessionFactory();

        // Open session
        Session session = sessionFactory.openSession();

        // Begin transaction
        Transaction transaction = session.beginTransaction();

        // Create Employee
        Employee emp = new Employee();
        emp.setName("Aishwarya");
        emp.setSalary(70000.00);

        // Save employee
        session.save(emp);

        // Commit transaction
        transaction.commit();

        // Close session
        session.close();
        sessionFactory.close();

        System.out.println("Employee saved successfully!");
    }
}
