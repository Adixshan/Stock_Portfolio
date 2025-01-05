package com.example.portfolio.entity;

import jakarta.persistence.*;

@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String ticker;
    private int quantity;
    private double buyPrice;

    // Getters and Setters
}
